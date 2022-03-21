const { refreshPage, closeJokerPopUpIfDisplayed, clickElement } = require("./BasePage")

//selector
const btn_PopupClose = '#cboxClose';
const addFavButton = '.social-button.favorite-button.add.active';

class RestaurantPage{
    addFavoriteSelectedRestaurant(){
        refreshPage
        closeJokerPopUpIfDisplayed(btn_PopupClose)
        clickElement(addFavButton)
        closeJokerPopUpIfDisplayed(btn_PopupClose)
    }

    /*closeJokerPopUpIfDisplayed(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (this.elements.btn_PopupClose().should('be.visible')) {
                this.elements.btn_PopupClose().click()
            }
          })
    }*/
    
}

module.exports = new RestaurantPage();