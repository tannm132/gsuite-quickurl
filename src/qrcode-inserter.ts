import * as QRCode from 'qrcode';
import { IInserter, ITransformed } from './IInserter.interface';
import { GDocRelatedError } from './custom-exceptions';

class QrCodeInserter implements IInserter {
  async transform(url: string): Promise<any> {
    try {
      return await QRCode.toDataURL(url);
    } catch (err) {
      throw new Error('Cannot generate QrCode.');
    }
  }

  insert(transformedItem: ITransformed): void {
    const selection = SlidesApp.getActivePresentation().getSelection();
    const currentPage = selection.getCurrentPage();

    if (currentPage) {
      currentPage.insertImage(transformedItem as string);
    } else {
      throw new GDocRelatedError('Cannot get current page.');
    }
  }
}

export { QrCodeInserter };
