class HomePage{
    elements = {
        chooseRegion: () => cy.get('.col-md-4.form > .select2 > .selection > .select2-selection > .select2-selection__arrow'),
        regionList: () => cy.get('.select2-results__option', {timeout: 10000}),
        searchRestaurantButton: () => cy.get('.col-md-1 > .form-control'),
        userInfoContainerButton: () => cy.get('.ys-user-info-container'),
        goToMyFavorite: () => cy.get('.ys-userSettings > ul > :nth-child(4) > a'),
    }

    selectRegionByValue(regionName){
        this.elements.chooseRegion().should('be.visible').click()
        this.elements.regionList().contains(regionName).click()
    }
    clickRestaurantButton(){
        this.elements.searchRestaurantButton().should('be.visible').click()
        cy.wait(5000)
    }

    openUserDetailContainer(){
        this.elements.userInfoContainerButton().should('be.visible').click()
    }

    clickMyFavorite(){
        this.elements.goToMyFavorite().should('be.visible').click()
    }
}

module.exports = new HomePage();