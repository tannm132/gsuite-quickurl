import { IInserter } from './IInserter.interface';
import { NotImplementedError } from './custom-exceptions';
import { QrCodeInserter } from '../src/qrcode-inserter';
import { ShortUrlInserter } from '../src/shorturl-inserter';

enum ShortenOption {
  QrCode = 'QR_CODE',
  ShortUrl = 'SHORT_URL'
}

class QuickUrlService {
  /**
   * Return the inserter with given option
   * @param option shortening option
   */
  static getInserter(option: string = ''): IInserter {
    let inserter: IInserter;

    switch (option) {
      case ShortenOption.QrCode:
        inserter = new QrCodeInserter();
        break;
      case ShortenOption.ShortUrl:
        inserter = new ShortUrlInserter();
        break;
      default:
        throw new NotImplementedError('Inserter not available.');
    }

    return inserter;
  }
}

export { QuickUrlService };
