class RestaurantListPage{
    elements = {
        btn_PopupClose: () => cy.get("#cboxClose", {timeout: 10000})
    }

    selectRandomRestaurant(){
        cy.reload()
        this.closeJokerPopUpIfDisplayed()
        let restaurantName = ""
        function getRandomInt(min, max){      
            return Math.floor(Math.random() * (max - min + 1)) + min;    
        }
      
        cy.get(".restaurant-display-name").within((listing) => {
            const randomNumber = getRandomInt(0, listing.length-1)
            const randomRestaurant = cy.get('a').eq(randomNumber)
            randomRestaurant
            .invoke('removeAttr', 'target')
            .click()
            .then(($link) => {
                restaurantName = $link.text().toString()
                cy.log('restaurant Name :' + restaurantName)
                cy.setSessionStorage('selectedRestaurantName', restaurantName)
            })

            const sessionData = cy.getSessionStorage('selectedRestaurantName')
            cy.log('selected restaurant' + sessionData)
        })
        
    }

    closeJokerPopUpIfDisplayed(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (this.elements.btn_PopupClose().should('be.visible')) {
                this.elements.btn_PopupClose().click()
            }
          })

        /*try {
                this.elements.btn_PopupClose().should('be.visible').click()
        } catch (e) {
        }
        return this*/
    }
    
}

module.exports = new RestaurantListPage();