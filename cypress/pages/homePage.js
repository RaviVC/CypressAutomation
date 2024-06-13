export class homePage {
    webLocators = {
        searchEditField:'input#small-searchterms',
        searchBtn: 'button[type="submit"]'
    }

    openURL(){
        cy.visit(Cypress.env('baseUrl'))
        //cy.visit('https://demo.nopcommerce.com/')
        cy.wait(3000)
    }

    enterProductInSearchEditField(searchProduct){
        cy.get(this.webLocators.searchEditField).type(searchProduct)
    }

    clickOnSearchBtn(){
        cy.get(this.webLocators.searchBtn).click()
        cy.wait(3000)
    }
}