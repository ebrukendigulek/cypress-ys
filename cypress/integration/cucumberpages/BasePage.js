class BasePage{
    
    clickElement(element){
        cy.log("click ", element)
        cy.get(element).should('be.visible').click()
    }

    goToPage(adress){
        cy.log("go to ", adress)
        cy.visit(adress)
    }

    setBrowserCookie(key,value){
        cy.setCookie(key, value)
    }

    refreshPage(){
        cy.reload()
    }

    isElementVisible(element){
        cy.log("shoulde be visible  ", element)
        return cy.get(element).should('be.visible')
    }

    closeJokerPopUpIfDisplayed(element){
        cy.wait(5000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (isElementVisible(element)) {
                clickElement(element)
            }
          })
    }

    type(element, value){
        cy.log("element: ", element, "value: " , value)
        cy.get(element).type(value)
    }
    
}

module.exports = new BasePage();