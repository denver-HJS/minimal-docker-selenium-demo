import { Builder, WebDriver } from 'selenium-webdriver';
import { Options as ChromeOptions } from 'selenium-webdriver/chrome';

async function main() {
  let webDriver: WebDriver;
  const headlessOptions: ChromeOptions = new ChromeOptions()
    .addArguments( '--headless' )
    .addArguments('--window-size=1920,1080')
    .addArguments('--no-sandbox')
    .addArguments('--disable-dev-shm-usage')
    .addArguments('--disable-gpu');
  webDriver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions( headlessOptions )
    .build();

  try {
    await webDriver.get('https://www.google.com');
    await webDriver.quit();
    console.log('quit session successfully');
  } catch (e) {
    console.log('error occurred' + e);
  }

}

main().then(() => console.log('main routine completed'));


