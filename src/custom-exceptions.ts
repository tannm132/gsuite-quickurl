class CustomError extends Error {
  constructor(...params: any) {
    super(...params);
    this.name = this.constructor.name;
  }
}

class NotImplementedError extends CustomError {}
class GDocRelatedError extends CustomError {}
class ExecutionError extends CustomError {}

export { NotImplementedError };
export { GDocRelatedError };
export { ExecutionError };
