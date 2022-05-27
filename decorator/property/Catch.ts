export function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    propertyKey: PropertyKey,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    const method = descriptor.value;

    descriptor.value = (...args: any[]) => {
      try {
        method?.apply(target, args);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
        if (rethrow) {
          throw e;
        }
      }
    };
  };
}
