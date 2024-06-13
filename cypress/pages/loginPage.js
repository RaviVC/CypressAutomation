export class loginPage {

    webLocators = {
        loginLnk:'.ico-login',
        email: '#Email',
        password: '#Password',
        loginBtn : 'button[class="button-1 login-button"]'

    }

    loginToeCommerceAccount(emailName,passwordName){
        cy.get(this.webLocators.loginLnk).click()
        cy.wait(2000)
        cy.get(this.webLocators.email).type(emailName)
        cy.get(this.webLocators.password).type(passwordName)
        cy.get(this.webLocators.loginBtn).click()
    }
}