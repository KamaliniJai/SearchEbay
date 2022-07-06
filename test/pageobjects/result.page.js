const Page = require('./page');


class ResultPage extends Page {
   
    get searchResult () {
        return $('.srp-controls__count-heading');
    }
    async VerifyResult (searchText) {
        await expect(this.searchResult).toHaveTextContaining(searchText);
    }
}

module.exports = new ResultPage();
