"use strict";
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome_1 = require("selenium-webdriver/chrome");
var webDriver;
var headlessOptions = new chrome_1.Options()
    .addArguments('--headless')
    .addArguments('--window-size=1920,1080')
    .addArguments('--no-sandbox')
    .addArguments('--disable-dev-shm-usage')
    .addArguments('--disable-gpu');
webDriver = new selenium_webdriver_1.Builder()
    .forBrowser('chrome')
    .setChromeOptions(headlessOptions)
    .build();
