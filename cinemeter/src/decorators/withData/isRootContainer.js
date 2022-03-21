import isContainer from './isContainer';

// Returns if a component is a root container
export default function(component) {
  return !!(isContainer(component) && component.isRootContainer);
}
