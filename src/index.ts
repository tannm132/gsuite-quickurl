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
