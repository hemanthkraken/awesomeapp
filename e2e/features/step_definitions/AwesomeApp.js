/* eslint-env detox/detox, jest */
const coinData = require('../../../App/Data/response_1593642744260.json');
const { Given, Then } = require('cucumber');
const fs = require('fs');

Given(/^I swipe from left edge of the screen$/, async function () {
    await element(by.id('leftslide')).swipe('right', 'fast');
});

Then(/^The Menu Drawer is opened$/, async function () {
    await expect(element(by.id('sidemenuButton'))).toHaveText(
        'Get the ultimate answer',
    );
    await expect(
        element(by.id('sidemenu').withDescendant(by.text('Side menu'))),
    ).toBeVisible();
    await expect(
        element(
            by
                .id('sidemenu')
                .withDescendant(
                    by.text(
                        'Legend says that if you click on the button below, you may get the answer to the Ultimate Question of Life, the Universe, and Everything...',
                    ),
                ),
        ),
    ).toBeVisible();
});

Given(/^I press the Dashboard tab of the App$/, async function () {
    await element(by.id('Dashboard tab')).tap();
});

Then(/^The Dashboard tab should load with all coins data$/, async function () {
    await expect(element(by.id('dashboard-title'))).toHaveText(
        coinData.length.toString() + ' coins',
    );
    await expect(element(by.id('graffiti'))).toBeVisible();
    for (
        var coinIndex = 0, len = coinData.length;
        coinIndex < len;
        coinIndex++
    ) {
        //All UI elements within a single coin list item
        var coinlistItemContainer = element(
            by.id('Coin-' + coinData[coinIndex].symbol),
        );
        var coinImage = element(
            by.id('Coin-' + coinData[coinIndex].symbol + '-image'),
        );
        var coinName = element(
            by.id('Coin-' + coinData[coinIndex].symbol + '-name'),
        );
        var coinPrice = element(
            by.id('Coin-' + coinData[coinIndex].symbol + '-price'),
        );
        var coinSymbol = element(
            by.id('Coin-' + coinData[coinIndex].symbol + '-symbol'),
        );
        var coinpercentage = element(
            by.id('Coin-' + coinData[coinIndex].symbol + '-percentage'),
        );

        await waitFor(coinlistItemContainer)
            .toBeVisible()
            .whileElement(by.id('dashboard-scrollview'))
            .scroll(500, 'down');
        await expect(coinlistItemContainer).toBeVisible();
        await expect(coinImage).toBeVisible();
        await expect(coinName).toHaveText(
            coinData[coinIndex].name.replace(/ Coin$/, ''),
        );
        await expect(coinPrice).toHaveText(
            '$' + coinData[coinIndex].current_price.toString(),
        );
        await expect(coinSymbol).toHaveText(
            coinData[coinIndex].symbol.toUpperCase(),
        );
        var sign =
            coinData[coinIndex].price_change_percentage_24h > 0 ? '+' : '';
        await expect(coinpercentage).toHaveText(
            sign +
                coinData[coinIndex].price_change_percentage_24h.toFixed(2) +
                '%',
        );
    }
});

Given(/^I press the Dashboard tab$/, async function () {
    await element(by.id('Dashboard tab')).tap();
});

Then(
    /^The Dashboard tab should load and Dashboard screenshot is taken$/,
    async function () {
        await expect(element(by.id('dashboard-title'))).toHaveText('100 coins');
        await expect(element(by.id('graffiti'))).toBeVisible();
        await expect(element(by.id('dashboard-scrollview'))).toBeVisible();
        new Promise((resolve) => setTimeout(resolve, 2000)); // Added this sleep for letting images to load
        var screenShotPath = await device.takeScreenshot('Dashboard Tab');
        const buffer = await fs.readFileSync(screenShotPath);
        var world = this;
        await world.attach(buffer, 'image/png');
    },
);

Given(/^I press the Settings tab of the App$/, async function () {
    await element(by.id('Settings tab')).tap();
});

Then(
    /^The Settings tab should load with all the expected contents$/,
    async function () {
        await expect(element(by.id('settings-title'))).toHaveText(
            'Application Settings',
        );
        await expect(element(by.id('checkBTC'))).toHaveText(
            'Only show "Bitcoin" coins',
        );
        await expect(element(by.id('checkWinners'))).toHaveText(
            'Only show winners',
        );
        await expect(element(by.id('checkLosers'))).toHaveText(
            'Only show losers',
        );
    },
);

Given(/^I open the App$/, async function () {
    await expect(element(by.id('Dashboard tab'))).toBeVisible();
});

Then(/^Test will fail with a screenshot$/, async function () {
    await expect(element(by.id('sidemenuButton'))).toHaveText('Failing Text');
});
