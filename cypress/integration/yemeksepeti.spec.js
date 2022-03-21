/// <reference types="Cypress" />

it('Visit Yemek Sepeti and set cookie', ()  => {
  cy.visit('https://www.yemeksepeti.com')
   
  //random açılan cookieleri kapama
  cy.setCookie("splashViewed", "true")
  cy.setCookie("banabiPopoverShown","1")
  cy.get('[data-catalog="TR_ISTANBUL"] > .cityContainer > .plateNo').click()
})


it('Login Yemek Sepeti', ()  => {
    //HomePage
    cy.get('#UserName').type("yemeksepeticase@gmail.com")
    cy.get('#password').type("Yemekspt123.")
    cy.get('#ys-fastlogin-button').click()
    cy.get('.col-md-4.form > .select2 > .selection > .select2-selection > .select2-selection__arrow').should('be.visible').click()
    cy.get('.select2-results__option').contains('Arnavutköy İlçesi (Adnan Menderes Mah.)').click()
    cy.wait(1000)
    cy.get('.col-md-1 > .form-control').should('be.visible').click()
    //cy.get('.col-md-7 > .form-control').type("")
    cy.wait(1000)
  })
  
it('Login Yemek Sepeti', ()  => {
    //RestaurantListPage
    function getRandomInt(min, max){      
    return Math.floor(Math.random() * (max - min + 1)) + min;    
  }

  let restaurantName = ""

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
  
  //RestaurantPage
  cy.get('.social-button.favorite-button.add.active').should('be.visible').click()

  //HomePage sol menu aç
  cy.get('.ys-user-info-container').should('be.visible').click()
  cy.get('.ys-userSettings > ul > :nth-child(4) > a').should('be.visible').click()

  //FavoritePage
  cy.reload()
  cy.get('.favorite-item>a>span>b')
    .should("contain.text",restaurantName)
})
  