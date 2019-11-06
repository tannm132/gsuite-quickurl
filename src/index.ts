import { QuickUrlService } from './quickurl.service';

declare var global: any;

global.onOpen = (event: any): void => {
  SlidesApp.getUi()
    .createAddonMenu()
    .addItem('Open quickurl', 'showSidebar')
    .addToUi();
};

global.onInstall = (event: any): void => {
  global.onOpen(event);
};

global.showSidebar = (): void => {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('QuickUrl');
  SlidesApp.getUi().showSidebar(ui);
};

global.insertQuickUrl = insertQuickUrl;

/**
 * Do insert shortened item into document
 * @param url Long input URL
 * @param options Array of enum options: QR_CODE, SHORT_URL...
 */
function insertQuickUrl(url: string, options: [string]): void {
  options.forEach(option => {
    const inserter = QuickUrlService.getInserter(option);

    const shortenedItem = inserter.transform(url);

    inserter.insert(shortenedItem);
  });
}
