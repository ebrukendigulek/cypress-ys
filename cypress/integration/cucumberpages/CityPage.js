const { goToPage, clickElement, setBrowserCookie } = require("./BasePage")

//selector
const city = '[data-catalog="TR_ISTANBUL"] > .cityContainer > .plateNo';

class CityPage{
    openCityPage(){
        cy.fixture('data').then((data) => {
            goToPage(data.yemeksepetiurl)
        })
    }

    chooseCity(){
        clickElement(city)
    }

    addBrowserCookie(){
        setBrowserCookie("splashViewed", "true")
        setBrowserCookie("banabiPopoverShown","1") 
    }
}

module.exports = new CityPage();