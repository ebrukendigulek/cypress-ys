class LoginPage{
    elements = {
        btn_AddFavorite: () => cy.get(".ys-icons.ys-icons-grayStar"),
        userName: () => cy.get('#UserName'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#ys-fastlogin-button')
    }

    successLogin(){
        
        cy.fixture('data').then((data) => {
            this.elements.userName().type("yemeksepeticase@gmail.com")
            this.elements.password().type(data.password)
        })
        this.elements.loginButton().click()
    }
}

module.exports = new LoginPage();