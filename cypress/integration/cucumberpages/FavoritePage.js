const { refreshPage } = require("./BasePage")

class FavoritePage{

    checkFavoriteRestaurantInList() {
        refreshPage
        const sessionData = cy.getSessionStorage('selectedRestaurantName')
        cy.log('selected restaurant' + sessionData)
        cy.get('.favorite-item>a>span>b')
            .should("contain.text",'sessionData')
    }
}  

module.exports = new FavoritePage();