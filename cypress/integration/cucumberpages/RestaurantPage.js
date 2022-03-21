class RestaurantPage{
    elements = {
        addFavButton: () => cy.get('.social-button.favorite-button.add.active'),
        btn_PopupClose: () => cy.get("#cboxClose", {timeout: 10000}),
        searchRestaurant: () => cy.get('.col-md-1 > .form-control')
    }

    addFavoriteSelectedRestaurant(){
        cy.reload()
        this.closeJokerPopUpIfDisplayed()
        this.elements.addFavButton().should('exist').click()
        this.closeJokerPopUpIfDisplayed()
    }

    closeJokerPopUpIfDisplayed(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (this.elements.btn_PopupClose().should('be.visible')) {
                this.elements.btn_PopupClose().click()
            }
          })
    }
    
}

module.exports = new RestaurantPage();