const Page = require('./page');


class HomePage extends Page {
   
    get inputSearchText () {
        return $('.gh-tb.ui-autocomplete-input');
    }

    get btnSearch () {
        return $('#gh-btn');
    }

   
    async Search (searchText) {
        await this.inputSearchText.setValue(searchText);
        await this.btnSearch.click();
    }

   
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
