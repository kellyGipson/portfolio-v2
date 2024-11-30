export class ClassContentError extends Error {
  constructor(className: string, methodName: string, message: string) {
    super(`${className}.${methodName}::${message}`);
  }
}
