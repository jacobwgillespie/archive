package command

import (
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/hashicorp/go-getter"
	"github.com/media-tool/mediatool/config/module"
	"github.com/media-tool/mediatool/mediatool"
)

// This is the directory where our test fixtures are.
var fixtureDir = "./test-fixtures"

func init() {
	test = true

	// Expand the fixture dir on init because we change the working
	// directory in some tests.
	var err error
	fixtureDir, err = filepath.Abs(fixtureDir)
	if err != nil {
		panic(err)
	}
}

func tempDir(t *testing.T) string {
	dir, err := ioutil.TempDir("", "tf")
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	if err := os.RemoveAll(dir); err != nil {
		t.Fatalf("err: %s", err)
	}

	return dir
}

func testFixturePath(name string) string {
	return filepath.Join(fixtureDir, name)
}

func testCtxConfig(p mediatool.ResourceProvider) *mediatool.ContextOpts {
	return &mediatool.ContextOpts{
		Providers: map[string]mediatool.ResourceProviderFactory{
			"test": func() (mediatool.ResourceProvider, error) {
				return p, nil
			},
		},
	}
}

func testCtxConfigWithShell(p mediatool.ResourceProvider, pr mediatool.ResourceProvisioner) *mediatool.ContextOpts {
	return &mediatool.ContextOpts{
		Providers: map[string]mediatool.ResourceProviderFactory{
			"test": func() (mediatool.ResourceProvider, error) {
				return p, nil
			},
		},
		Provisioners: map[string]mediatool.ResourceProvisionerFactory{
			"shell": func() (mediatool.ResourceProvisioner, error) {
				return pr, nil
			},
		},
	}
}

func testModule(t *testing.T, name string) *module.Tree {
	mod, err := module.NewTreeModule("", filepath.Join(fixtureDir, name))
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	s := &getter.FolderStorage{StorageDir: tempDir(t)}
	if err := mod.Load(s, module.GetModeGet); err != nil {
		t.Fatalf("err: %s", err)
	}

	return mod
}

func testPlanFile(t *testing.T, plan *mediatool.Plan) string {
	path := testTempFile(t)

	f, err := os.Create(path)
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	defer f.Close()

	if err := mediatool.WritePlan(plan, f); err != nil {
		t.Fatalf("err: %s", err)
	}

	return path
}

func testReadPlan(t *testing.T, path string) *mediatool.Plan {
	f, err := os.Open(path)
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	defer f.Close()

	p, err := mediatool.ReadPlan(f)
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	return p
}

// testState returns a test State structure that we use for a lot of tests.
func testState() *mediatool.State {
	return &mediatool.State{
		Modules: []*mediatool.ModuleState{
			&mediatool.ModuleState{
				Path: []string{"root"},
				Resources: map[string]*mediatool.ResourceState{
					"test_instance.foo": &mediatool.ResourceState{
						Type: "test_instance",
						Primary: &mediatool.InstanceState{
							ID: "bar",
						},
					},
				},
			},
		},
	}
}

func testStateFile(t *testing.T, s *mediatool.State) string {
	path := testTempFile(t)

	f, err := os.Create(path)
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	defer f.Close()

	if err := mediatool.WriteState(s, f); err != nil {
		t.Fatalf("err: %s", err)
	}

	return path
}

// testStateFileDefault writes the state out to the default statefile
// in the cwd. Use `testCwd` to change into a temp cwd.
func testStateFileDefault(t *testing.T, s *mediatool.State) string {
	f, err := os.Create(DefaultStateFilename)
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	defer f.Close()

	if err := mediatool.WriteState(s, f); err != nil {
		t.Fatalf("err: %s", err)
	}

	return DefaultStateFilename
}

// testStateFileRemote writes the state out to the remote statefile
// in the cwd. Use `testCwd` to change into a temp cwd.
func testStateFileRemote(t *testing.T, s *mediatool.State) string {
	path := filepath.Join(DefaultDataDir, DefaultStateFilename)
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		t.Fatalf("err: %s", err)
	}

	f, err := os.Create(path)
	if err != nil {
		t.Fatalf("err: %s", err)
	}
	defer f.Close()

	if err := mediatool.WriteState(s, f); err != nil {
		t.Fatalf("err: %s", err)
	}

	return path
}

// testStateOutput tests that the state at the given path contains
// the expected state string.
func testStateOutput(t *testing.T, path string, expected string) {
	f, err := os.Open(path)
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	newState, err := mediatool.ReadState(f)
	f.Close()
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	actual := strings.TrimSpace(newState.String())
	expected = strings.TrimSpace(expected)
	if actual != expected {
		t.Fatalf("expected:\n%s\nactual:\n%s", expected, actual)
	}
}

func testProvider() *mediatool.MockResourceProvider {
	p := new(mediatool.MockResourceProvider)
	p.DiffReturn = &mediatool.InstanceDiff{}
	p.RefreshFn = func(
		info *mediatool.InstanceInfo,
		s *mediatool.InstanceState) (*mediatool.InstanceState, error) {
		return s, nil
	}
	p.ResourcesReturn = []mediatool.ResourceType{
		mediatool.ResourceType{
			Name: "test_instance",
		},
	}

	return p
}

func testTempFile(t *testing.T) string {
	tf, err := ioutil.TempFile("", "tf")
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	result := tf.Name()

	if err := tf.Close(); err != nil {
		t.Fatalf("err: %s", err)
	}
	if err := os.Remove(result); err != nil {
		t.Fatalf("err: %s", err)
	}

	return result
}

func testTempDir(t *testing.T) string {
	d, err := ioutil.TempDir("", "tf")
	if err != nil {
		t.Fatalf("err: %s", err)
	}

	return d
}

// testCwd is used to change the current working directory
// into a test directory that should be remoted after
func testCwd(t *testing.T) (string, string) {
	tmp, err := ioutil.TempDir("", "tf")
	if err != nil {
		t.Fatalf("err: %v", err)
	}

	cwd, err := os.Getwd()
	if err != nil {
		t.Fatalf("err: %v", err)
	}

	if err := os.Chdir(tmp); err != nil {
		t.Fatalf("err: %v", err)
	}

	return tmp, cwd
}

// testFixCwd is used to as a defer to testDir
func testFixCwd(t *testing.T, tmp, cwd string) {
	if err := os.Chdir(cwd); err != nil {
		t.Fatalf("err: %v", err)
	}

	if err := os.RemoveAll(tmp); err != nil {
		t.Fatalf("err: %v", err)
	}
}
