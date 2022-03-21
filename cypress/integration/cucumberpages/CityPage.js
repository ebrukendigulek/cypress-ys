class CityPage{
    elements = {

    }

    openCityPage(){
        cy.visit('https://www.yemeksepeti.com')
    }

    chooseCity(){
        cy.get('[data-catalog="TR_ISTANBUL"] > .cityContainer > .plateNo').click()
    }

    addBrowserCookie(){
        cy.setCookie("splashViewed", "true")
        cy.setCookie("banabiPopoverShown","1") 
    }
}

module.exports = new CityPage();