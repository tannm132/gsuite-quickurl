interface ITransformed {}

interface IInserter {
  transform(url: string): ITransformed;
  insert(item: ITransformed): void;
}

export { IInserter, ITransformed };
