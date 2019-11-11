import { QuickUrlService } from '../src/quickurl.service';
import { NotImplementedError } from '../src/custom-exceptions';
import { QrCodeInserter } from '../src/qrcode-inserter';
import { ShortUrlInserter } from '../src/shorturl-inserter';

describe('Test QuickUrlService', () => {
  describe('getInserter(): return inserter interface', () => {
    it('should throw NotImplementedError when no option', () => {
      function getInserter() {
        QuickUrlService.getInserter();
      }

      expect(getInserter).toThrow(new NotImplementedError('Inserter not available.'));
    });

    it('should throw NotImplementedError when "FAKE" option', () => {
      function getInserter() {
        QuickUrlService.getInserter('FAKE');
      }

      expect(getInserter).toThrow(new NotImplementedError('Inserter not available.'));
    });

    it('should return QrCodeInserter when "QR_CODE" option', () => {
      expect(QuickUrlService.getInserter('QR_CODE')).toBeInstanceOf(QrCodeInserter);
    });

    it('should return ShortUrlInserter when "SHORT_URL" option', () => {
      expect(QuickUrlService.getInserter('SHORT_URL')).toBeInstanceOf(ShortUrlInserter);
    });
  });
});
