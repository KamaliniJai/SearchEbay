const HomePage = require('../pageobjects/home.page');
const ResultPage = require('../pageobjects/result.page');

describe('Ebay Search', () => {
    it('should return searched items', async () => {
        await HomePage.open();

        await HomePage.Search('Laptops');
        await ResultPage.VerifyResult('laptops');
    });

    it('should fail for reporting purpose', async () => {
        await HomePage.open();

        await HomePage.Search('Laptops');
        await ResultPage.VerifyResult('computers');
    });
});


