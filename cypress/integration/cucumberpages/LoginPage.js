const { type, clickElement } = require("./BasePage");

//selector
const userName = '#UserName';
const password = '#password';
const loginButton = '#ys-fastlogin-button';

class LoginPage{
    
    successLogin(){
        cy.fixture('data').then((data) => {
            type(userName,"yemeksepeticase@gmail.com")
            type(password,data.password)
           
        })
        clickElement(loginButton)
    }
}

module.exports = new LoginPage();