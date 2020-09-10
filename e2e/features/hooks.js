const {
    After,
    Before,
    BeforeAll,
    AfterAll,
    setDefaultTimeout,
    Status,
} = require('cucumber');
const detox = require('detox');
const device = detox.device;

const config = require('../../package.json').detox;
const fs = require('fs');

setDefaultTimeout(480 * 1000);

BeforeAll({ timeout: 240 * 1000 }, async function () {
    console.log('===> init');
    await detox.init(
        config /*{
        launchApp: true,
        reuse: true,
    }*/,
    );
    console.log('==> installApp');
    // await device.installApp();
});

Before({ timeout: 240 * 1000 }, async function () {
    await device.reloadReactNative();
});

After(async function (scenario) {
    var world = this;
    if (scenario.result.status === Status.FAILED) {
        var screenShotPath = await device.takeScreenshot(
            scenario.pickle['name'],
        );
        const buffer = fs.readFileSync(screenShotPath);
        await world.attach(buffer, 'image/png');
    }
});

AfterAll(async function () {
    await device.terminateApp();
    await detox.cleanup();
});
