import { IInserter } from './IInserter.interface';

class QrCodeInserter implements IInserter {
  transform(url: string) {
    return '';
  }
  insert(item) {}
}

export { QrCodeInserter };
