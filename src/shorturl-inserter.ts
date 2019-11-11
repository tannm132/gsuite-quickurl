import { IInserter, ITransformed } from './IInserter.interface';
import { GDocRelatedError } from './custom-exceptions';

enum UrlShortenerApi {
  Tinyurl = 'http://tinyurl.com/api-create.php?url='
}

class ShortUrlInserter implements IInserter {
  transform(url: string): ITransformed {
    const response = UrlFetchApp.fetch(UrlShortenerApi.Tinyurl + url);

    const shortLink = response.getContentText();

    return shortLink;
  }
  insert(transformedItem: ITransformed): void {
    const selection = SlidesApp.getActivePresentation().getSelection();
    const currentPage = selection.getCurrentPage();

    if (currentPage) {
      currentPage.insertTextBox(transformedItem as string);
    } else {
      throw new GDocRelatedError('Cannot get current page.');
    }
  }
}

export { ShortUrlInserter };
