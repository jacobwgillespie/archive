// Returns if a given component is a data container
export function isContainer(component) {
  return !!(component && component.getFragment && component.getAllFragments);
}

// Returns if a component is a root container
export function isRootContainer(component) {
  return !!(isContainer(component) && component.isRootContainer);
}
