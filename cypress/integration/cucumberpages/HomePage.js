const { clickElement } = require("./BasePage")

//selector
const chooseRegion = '.col-md-4.form > .select2 > .selection > .select2-selection > .select2-selection__arrow';
const regionList = '.select2-results__option';
const searchRestaurantButton = '.ys-icons.ys-icons-search.icon';
const userInfoContainerButton = '.ys-user-info-container';
const goToMyFavorite = ".ys-userSettings [href='/hesabim/favorilerim']";

class HomePage {

    selectRegionByValue(regionName){
        clickElement(chooseRegion)
        cy.get(regionList).contains(regionName).click()
    }

    clickRestaurantButton(){
        clickElement(searchRestaurantButton)
        cy.wait(5000)
    }

    openUserDetailContainer(){
        clickElement(userInfoContainerButton)
    }

    clickMyFavorite(){
        clickElement(goToMyFavorite)
    }
}

module.exports = new HomePage();