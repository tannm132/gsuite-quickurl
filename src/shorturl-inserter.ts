import { IInserter } from './IInserter.interface';

class ShortUrlInserter implements IInserter {
  transform(url: string) {
    return '';
  }
  insert(item) {}
}

export { ShortUrlInserter };
