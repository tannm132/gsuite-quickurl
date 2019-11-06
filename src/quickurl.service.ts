import { IInserter } from './IInserter.interface';

enum ShortenOption {
  QrCode = 'QR_CODE',
  ShortUrl = 'SHORT_URL'
}

class QuickUrlService {
  static getInserter(option: string): IInserter {
    let inserter;

    switch (option) {
      case ShortenOption.QrCode:
        break;
      case ShortenOption.ShortUrl:
        break;
      default:
        break;
    }

    return inserter;
  }
}

export { QuickUrlService };
