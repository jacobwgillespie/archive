export default async function hydrateCache(component) {
  if (component.type.WrappedComponent) {
    hydrateCache(component.type.WrappedComponent);
  }
}
