class NotImplementedError extends Error {
  constructor(...params: any) {
    super(...params);

    this.name = 'NotImplementedError';
  }
}

class GDocRelatedError extends Error {
  constructor(...params: any) {
    super(...params);

    this.name = 'GDocRelatedError';
  }
}

export { NotImplementedError };
export { GDocRelatedError };
