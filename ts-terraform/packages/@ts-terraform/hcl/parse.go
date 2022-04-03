package main

import (
	"encoding/json"
	"fmt"

	"github.com/hashicorp/hcl/v2"
	"github.com/hashicorp/hcl/v2/hclsyntax"
	"github.com/zclconf/go-cty/cty"
	ctyjson "github.com/zclconf/go-cty/cty/json"
)

// Value represent a value to serialize into JSON
type Value struct {
	Value interface{}
}

func singleToValue(v interface{}) Value {
	return Value{v}
}

func mapToValueMap(v interface{}) map[string]Value {
	values := map[string]Value{}

	switch v := v.(type) {
	case hclsyntax.Attributes:
		for idx, v := range v {
			values[idx] = Value{v}
		}

	default:
		panic(fmt.Errorf("unknown map: %v", v))
	}

	return values
}

func sliceToValueSlice(v interface{}) []Value {
	values := []Value{}

	switch v := v.(type) {
	case hclsyntax.Blocks:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	case []hclsyntax.Expression:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	case []hclsyntax.ObjectConsItem:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	case hcl.Diagnostics:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	case []hcl.Range:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	case hcl.Traversal:
		values = make([]Value, len(v))
		for idx, v := range v {
			values[idx] = Value{v}
		}

	default:
		panic(fmt.Errorf("unknown slice: %v", v))
	}

	return values
}

// MarshalJSON converts the value into json, recursively passing all children through the Value interface
func (v Value) MarshalJSON() ([]byte, error) {
	if v.Value == nil {
		return []byte("null"), nil
	}

	switch v := v.Value.(type) {

	case *hclsyntax.AnonSymbolExpr:
		return json.Marshal(map[string]interface{}{
			"kind":     "anonSymbolExpr",
			"srcRange": singleToValue(v.SrcRange),
		})

	case *hclsyntax.Attribute:
		return json.Marshal(map[string]interface{}{
			"kind":        "attribute",
			"name":        v.Name,
			"expr":        singleToValue(v.Expr),
			"srcRange":    singleToValue(v.SrcRange),
			"nameRange":   singleToValue(v.NameRange),
			"equalsRange": singleToValue(v.EqualsRange),
		})

	case *hclsyntax.Block:
		return json.Marshal(map[string]interface{}{
			"kind":            "block",
			"type":            v.Type,
			"labels":          v.Labels,
			"body":            singleToValue(v.Body),
			"typeRange":       singleToValue(v.TypeRange),
			"labelRanges":     sliceToValueSlice(v.LabelRanges),
			"openBraceRange":  singleToValue(v.OpenBraceRange),
			"closeBraceRange": singleToValue(v.CloseBraceRange),
		})

	case *hclsyntax.BinaryOpExpr:
		return json.Marshal(map[string]interface{}{
			"kind":     "binaryOpExpr",
			"lhs":      singleToValue(v.LHS),
			"op":       singleToValue(v.Op),
			"rhs":      singleToValue(v.RHS),
			"srcRange": singleToValue(v.SrcRange),
		})

	case *hclsyntax.Body:
		return json.Marshal(map[string]interface{}{
			"kind":       "body",
			"attributes": mapToValueMap(v.Attributes),
			"blocks":     sliceToValueSlice(v.Blocks),
		})

	case *hclsyntax.ConditionalExpr:
		return json.Marshal(map[string]interface{}{
			"kind":        "conditionalExpr",
			"condition":   singleToValue(v.Condition),
			"trueResult":  singleToValue(v.TrueResult),
			"falseResult": singleToValue(v.FalseResult),
			"srcRange":    singleToValue(v.SrcRange),
		})

	case *hclsyntax.ForExpr:
		return json.Marshal(map[string]interface{}{
			"kind":       "functionCallExpr",
			"keyVar":     v.KeyVar,
			"valVar":     v.ValVar,
			"collExpr":   singleToValue(v.CollExpr),
			"keyExpr":    singleToValue(v.KeyExpr),
			"valExpr":    singleToValue(v.ValExpr),
			"condExpr":   singleToValue(v.CondExpr),
			"group":      v.Group,
			"srcRange":   singleToValue(v.SrcRange),
			"openRange":  singleToValue(v.OpenRange),
			"closeRange": singleToValue(v.CloseRange),
		})

	case *hclsyntax.FunctionCallExpr:
		return json.Marshal(map[string]interface{}{
			"kind":            "functionCallExpr",
			"name":            v.Name,
			"args":            sliceToValueSlice(v.Args),
			"expandFinal":     v.ExpandFinal,
			"nameRange":       singleToValue(v.NameRange),
			"openParenRange":  singleToValue(v.OpenParenRange),
			"closeParenRange": singleToValue(v.CloseParenRange),
		})

	case *hclsyntax.IndexExpr:
		return json.Marshal(map[string]interface{}{
			"kind":         "indexExpr",
			"collection":   singleToValue(v.Collection),
			"key":          singleToValue(v.Key),
			"srcRange":     singleToValue(v.SrcRange),
			"openRange":    singleToValue(v.OpenRange),
			"bracketRange": singleToValue(v.BracketRange),
		})

	case *hclsyntax.LiteralValueExpr:
		return json.Marshal(map[string]interface{}{
			"kind":     "literalValueExpr",
			"val":      singleToValue(v.Val),
			"type":     v.Val.Type(),
			"srcRange": singleToValue(v.SrcRange),
		})

	case *hclsyntax.ObjectConsExpr:
		return json.Marshal(map[string]interface{}{
			"kind":      "objectConsExpr",
			"items":     sliceToValueSlice(v.Items),
			"srcRange":  singleToValue(v.SrcRange),
			"openRange": singleToValue(v.OpenRange),
		})

	case hclsyntax.ObjectConsItem:
		return json.Marshal(map[string]interface{}{
			"kind":      "objectConsItem",
			"keyExpr":   singleToValue(v.KeyExpr),
			"valueExpr": singleToValue(v.ValueExpr),
		})

	case *hclsyntax.ObjectConsKeyExpr:
		return json.Marshal(map[string]interface{}{
			"kind":            "objectConsKeyExpr",
			"wrapped":         singleToValue(v.Wrapped),
			"forceNonLiteral": v.ForceNonLiteral,
		})

	case *hclsyntax.Operation:
		return json.Marshal(map[string]interface{}{
			"kind": "operation",
			"type": v.Type,
		})

	case *hclsyntax.RelativeTraversalExpr:
		return json.Marshal(map[string]interface{}{
			"kind":      "relativeTraversalExpr",
			"source":    singleToValue(v.Source),
			"traversal": sliceToValueSlice(v.Traversal),
			"srcRange":  singleToValue(v.SrcRange),
		})

	case *hclsyntax.ScopeTraversalExpr:
		return json.Marshal(map[string]interface{}{
			"kind":      "scopeTraversalExpr",
			"traversal": sliceToValueSlice(v.Traversal),
			"srcRange":  singleToValue(v.SrcRange),
		})

	case *hclsyntax.SplatExpr:
		return json.Marshal(map[string]interface{}{
			"kind":        "splatExpr",
			"source":      singleToValue(v.Source),
			"each":        singleToValue(v.Each),
			"item":        singleToValue(v.Item),
			"srcRange":    singleToValue(v.SrcRange),
			"markerRange": singleToValue(v.MarkerRange),
		})

	case *hclsyntax.TemplateExpr:
		return json.Marshal(map[string]interface{}{
			"kind":     "templateExpr",
			"parts":    sliceToValueSlice(v.Parts),
			"srcRange": singleToValue(v.SrcRange),
		})

	case *hclsyntax.TemplateJoinExpr:
		return json.Marshal(map[string]interface{}{
			"kind":  "templateJoinExpr",
			"tuple": singleToValue(v.Tuple),
		})

	case *hclsyntax.TemplateWrapExpr:
		return json.Marshal(map[string]interface{}{
			"kind":     "templateWrapExpr",
			"wrapped":  singleToValue(v.Wrapped),
			"srcRange": singleToValue(v.SrcRange),
		})

	case *hclsyntax.TupleConsExpr:
		return json.Marshal(map[string]interface{}{
			"kind":      "tupleConsExpr",
			"exprs":     sliceToValueSlice(v.Exprs),
			"srcRange":  singleToValue(v.SrcRange),
			"openRange": singleToValue(v.OpenRange),
		})

	case *hclsyntax.UnaryOpExpr:
		return json.Marshal(map[string]interface{}{
			"kind":        "unaryOpExpr",
			"op":          singleToValue(v.Op),
			"val":         singleToValue(v.Val),
			"srcRange":    singleToValue(v.SrcRange),
			"symbolRange": singleToValue(v.SymbolRange),
		})

	case *hcl.Diagnostic:
		subject := singleToValue(v.Subject)
		context := singleToValue(v.Context)

		if v.Subject == nil {
			subject = Value{nil}
		}

		if v.Context == nil {
			context = subject
		}

		return json.Marshal(map[string]interface{}{
			"severity":   v.Severity,
			"summary":    v.Summary,
			"detail":     v.Detail,
			"subject":    subject,
			"context":    context,
			"expression": singleToValue(v.Expression),
		})

	case hcl.Pos:
		return json.Marshal(map[string]interface{}{
			"byte":   v.Byte,
			"column": v.Column,
			"line":   v.Line,
		})

	case hcl.Range:
		return json.Marshal(map[string]interface{}{
			"filename": v.Filename,
			"start":    singleToValue(v.Start),
			"end":      singleToValue(v.End),
		})

	case *hcl.Range:
		return json.Marshal(map[string]interface{}{
			"filename": v.Filename,
			"start":    singleToValue(v.Start),
			"end":      singleToValue(v.End),
		})

	case hcl.TraverseAttr:
		return json.Marshal(map[string]interface{}{
			"kind":     "traverseAttr",
			"name":     v.Name,
			"srcRange": singleToValue(v.SrcRange),
		})

	case hcl.TraverseIndex:
		return json.Marshal(map[string]interface{}{
			"kind":     "traverseIndex",
			"key":      singleToValue(v.Key),
			"keyType":  v.Key.Type(),
			"srcRange": singleToValue(v.SrcRange),
		})

	case hcl.TraverseRoot:
		return json.Marshal(map[string]interface{}{
			"kind":     "traverseRoot",
			"name":     v.Name,
			"srcRange": singleToValue(v.SrcRange),
		})

	case hcl.TraverseSplat:
		return json.Marshal(map[string]interface{}{
			"kind":     "traverseSplat",
			"each":     sliceToValueSlice(v.Each),
			"srcRange": singleToValue(v.SrcRange),
		})

	case cty.Value:
		if !v.IsKnown() {
			return json.Marshal(nil)
		}
		return json.Marshal(ctyjson.SimpleJSONValue{Value: v})

	default:
		return nil, fmt.Errorf("unable to marshal value: %v", v)
	}
}

// ParseConfig parses HCL into an AST
func ParseConfig(filename, contents string) (interface{}, error) {
	file, diags := hclsyntax.ParseConfig([]byte(contents), filename, hcl.Pos{Line: 1, Column: 1})

	data, err := json.Marshal(map[string]interface{}{
		"ast":         singleToValue(file.Body.(*hclsyntax.Body)),
		"diagnostics": sliceToValueSlice(diags),
	})

	if err != nil {
		return nil, err
	}

	return string(data), nil
}
