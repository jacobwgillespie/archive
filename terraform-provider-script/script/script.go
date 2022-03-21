package script

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os/exec"

	"github.com/hashicorp/terraform/helper/schema"
	uuid "github.com/satori/go.uuid"
)

// Payload defines the structure of the JSON payload
type Payload struct {
	Lifecycle string                 `json:"lifecycle"`
	Data      map[string]interface{} `json:"data"`
	State     map[string]interface{} `json:"state"`
}

func script() *schema.Resource {
	return &schema.Resource{
		Create: scriptCreate,
		Read:   scriptRead,
		Update: scriptUpdate,
		Delete: scriptDelete,

		Schema: map[string]*schema.Schema{
			"program": &schema.Schema{
				Type:     schema.TypeList,
				Required: true,
				Elem: &schema.Schema{
					Type: schema.TypeString,
				},
			},

			"working_dir": &schema.Schema{
				Type:     schema.TypeString,
				Optional: true,
				Default:  "",
			},

			"query": &schema.Schema{
				Type:     schema.TypeMap,
				Optional: true,
				Elem: &schema.Schema{
					Type: schema.TypeString,
				},
			},

			"result": &schema.Schema{
				Type:     schema.TypeMap,
				Computed: true,
				Elem: &schema.Schema{
					Type: schema.TypeString,
				},
			},
		},
	}
}

func scriptCreate(d *schema.ResourceData, meta interface{}) error {
	return execScript("create", d, meta)
}

func scriptRead(d *schema.ResourceData, meta interface{}) error {
	return execScript("read", d, meta)
}

func scriptUpdate(d *schema.ResourceData, meta interface{}) error {
	return execScript("update", d, meta)
}

func scriptDelete(d *schema.ResourceData, meta interface{}) error {
	return execScript("delete", d, meta)
}

func execScript(lifecycle string, d *schema.ResourceData, meta interface{}) error {
	programI := d.Get("program").([]interface{})
	workingDir := d.Get("working_dir").(string)
	query := d.Get("query").(map[string]interface{})

	prevID := d.Id()
	prevResult, hasResult := d.GetOk("result")

	if err := validateProgramAttr(programI); err != nil {
		return err
	}

	program := make([]string, len(programI))
	for i, vI := range programI {
		program[i] = vI.(string)
	}

	cmd := exec.Command(program[0], program[1:]...)

	cmd.Dir = workingDir

	payload := Payload{
		Lifecycle: lifecycle,
		Data:      query,
	}

	if hasResult {
		payload.State = prevResult.(map[string]interface{})
	}

	payloadJSON, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	cmd.Stdin = bytes.NewReader(payloadJSON)

	resultJSON, err := cmd.Output()
	if err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			if exitErr.Stderr != nil && len(exitErr.Stderr) > 0 {
				return fmt.Errorf("failed to execute %q: %s", program[0], string(exitErr.Stderr))
			}
			return fmt.Errorf("command %q failed with no error message", program[0])
		}
		return fmt.Errorf("failed to execute %q: %s", program[0], err)
	}

	result := map[string]string{}
	err = json.Unmarshal(resultJSON, &result)
	if err != nil {
		return fmt.Errorf("command %q produced invalid JSON: %s", program[0], err)
	}

	err = d.Set("result", result)
	if err != nil {
		return err
	}

	if prevID == "" {
		u := uuid.NewV4()
		d.SetId(u.String())
	}

	return nil
}
