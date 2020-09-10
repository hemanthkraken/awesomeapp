/* eslint-env detox/detox, jest */
import coinData from '../../App/Data/response_1593642744260.json';

describe('Awesome App', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    //Slide from left edge to validate the contents inside the Drawer
    it('The user menu slides out with drag from left edge of screen and validates text.', async () => {
        await element(by.id('leftslide')).swipe('right', 'fast');
        await expect(element(by.id('sidemenuButton'))).toHaveText('Get the ultimate answer')
        await expect(element(by.id('sidemenu')
        .withDescendant(by.text('Side menu')))).toBeVisible()
        await expect(element(by.id('sidemenu')
        .withDescendant(by.text('Legend says that if you click on the button below, you may get the answer to the Ultimate Question of Life, the Universe, and Everything...')))).toBeVisible()
    });

    //In Depth Dashboard Tab validation
    it('The Dashboard tab should load with all coins', async () => {
        await element(by.id('Dashboard tab')).tap()
        await expect(element(by.id('dashboard-title'))).toHaveText((coinData.length).toString()+' coins')
        await expect(element(by.id('graffiti'))).toBeVisible()
        for (var coinIndex = 0, len = coinData.length; coinIndex < len; coinIndex++) {

            //All UI elements within a single coin list item
            var coinlistItemContainer = element(by.id('Coin-'+coinData[coinIndex].symbol))
            var coinImage = element(by.id('Coin-'+coinData[coinIndex].symbol+'-image'))
            var coinName = element(by.id('Coin-'+coinData[coinIndex].symbol+'-name'))
            var coinPrice = element(by.id('Coin-'+coinData[coinIndex].symbol+'-price'))
            var coinSymbol = element(by.id('Coin-'+coinData[coinIndex].symbol+'-symbol'))
            var coinpercentage = element(by.id('Coin-'+coinData[coinIndex].symbol+'-percentage'))

            await waitFor(coinlistItemContainer).toBeVisible().whileElement(by.id('dashboard-scrollview')).scroll(500, 'down');
            await expect(coinlistItemContainer).toBeVisible()
            await expect(coinImage).toBeVisible()
            await expect(coinName).toHaveText(coinData[coinIndex].name.replace(/ Coin$/, ''))
            await expect(coinPrice).toHaveText('$'+coinData[coinIndex].current_price.toString())
            await expect(coinSymbol).toHaveText(coinData[coinIndex].symbol.toUpperCase())
            var sign = coinData[coinIndex].price_change_percentage_24h >0 ? '+' : ''
            await expect(coinpercentage).toHaveText(sign+coinData[coinIndex].price_change_percentage_24h.toFixed(2)+'%')
        }
    });

    //Light weight settings and Dashboard tab validation
    it('The Settings and Dashboard tabs load', async () => {
        await element(by.id('Dashboard tab')).tap()
        await expect(element(by.id('dashboard-title'))).toHaveText('100 coins')
        await expect(element(by.id('graffiti'))).toBeVisible()
        await expect(element(by.id('dashboard-scrollview'))).toBeVisible()
        await device.takeScreenshot('Dashboard Tab');
        await element(by.id('Settings tab')).tap()
        await expect(element(by.id('settings-title'))).toHaveText('Application Settings')
        await expect(element(by.id('checkBTC'))).toHaveText('Only show "Bitcoin" coins')
        await expect(element(by.id('checkWinners'))).toHaveText('Only show winners')
        await expect(element(by.id('checkLosers'))).toHaveText('Only show losers')
    });
});
