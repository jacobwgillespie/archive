// This file was automatically generated by genny.
// Any changes will be lost if this file is regenerated.
// see https://github.com/cheekybits/genny

package mp4v2

import "fmt"

// MP4Integer24Property encapsulates a property of type uint32
type MP4Integer24Property struct {
	mParentAtom MP4AtomInterface
	mName       string
	mReadOnly   bool
	mImplicit   bool
	mValues     []uint32
}

// NewMP4Integer24Property creates a new MP4Integer24Property
func NewMP4Integer24Property(parentAtom MP4AtomInterface, name string) *MP4Integer24Property {
	prop := &MP4Integer24Property{
		mParentAtom: parentAtom,
		mName:       name,
	}

	prop.SetCount(1)
	prop.SetValue(0, 0)

	return prop
}

// GetParentAtom returns the parent atom for the property
func (p *MP4Integer24Property) GetParentAtom() MP4AtomInterface {
	return p.mParentAtom
}

// GetName returns the property name
func (p *MP4Integer24Property) GetName() string {
	return p.mName
}

// GetType returns the property type
func (p *MP4Integer24Property) GetType() MP4PropertyType {
	return Integer24Property
}

// IsReadOnly returns true if the property is read-only
func (p *MP4Integer24Property) IsReadOnly() bool {
	return p.mReadOnly
}

// SetReadOnly enables setting the property to read-only
func (p *MP4Integer24Property) SetReadOnly(value ...bool) {
	if len(value) == 0 {
		p.mReadOnly = true
	} else {
		p.mReadOnly = value[0]
	}
}

// IsImplicit returns true if the property is implicit
func (p *MP4Integer24Property) IsImplicit() bool {
	return p.mImplicit
}

// SetImplicit sets the property to implicit
func (p *MP4Integer24Property) SetImplicit(value ...bool) {
	if len(value) == 0 {
		p.mImplicit = true
	} else {
		p.mImplicit = value[0]
	}
}

// GetCount needs documentation
func (p *MP4Integer24Property) GetCount() uint32 {
	return uint32(len(p.mValues))
}

// SetCount needs documentation
func (p *MP4Integer24Property) SetCount(count uint32) {
	if count > uint32(len(p.mValues)) {
		newValues := make([]uint32, count)
		copy(newValues, p.mValues)
		p.mValues = newValues
	} else {
		p.mValues = p.mValues[:count]
	}
}

// FindProperty needs documentation
func (p *MP4Integer24Property) FindProperty(name string, ppProperty **MP4Integer24Property, pIndex *uint32) bool {
	if name == "" {
		return false
	}

	if p.mName == name {
		*ppProperty = p
		return true
	}
	return false
}

// GetValue needs documentation
func (p *MP4Integer24Property) GetValue(index uint32) uint32 {
	return p.mValues[index]
}

// SetValue needs documentation
func (p *MP4Integer24Property) SetValue(value uint32, index uint32) {
	if p.mReadOnly {
		panic(fmt.Sprintf("property is read-only: %s", p.mName))
	}

	p.mValues[index] = value
}

// AddValue needs documentation
func (p *MP4Integer24Property) AddValue(value uint32) {
	p.mValues = append(p.mValues, value)
}

// InsertValue needs documentation
func (p *MP4Integer24Property) InsertValue(value uint32, index uint32) {
	if index > uint32(len(p.mValues)) {
		panic(fmt.Sprintf("invalid index: %v", index))
	}

	p.mValues = append(p.mValues, 0)
	copy(p.mValues[index+1:], p.mValues[index:])
	p.mValues[index] = value
}

// DeleteValue needs documentation
func (p *MP4Integer24Property) DeleteValue(index uint32) {
	p.mValues = append(p.mValues[:index], p.mValues[index+1:]...)
}
