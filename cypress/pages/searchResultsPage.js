export class searchResultsPage {
    webLocators = {
        
        productEditField: '#product_enteredQuantity_4',
        AddToCartBtn: '#add-to-cart-button-4',
        ShoppingCartLnk: '.cart-label'

    }

    enterProductQuantity(){
        cy.get(this.webLocators.productEditField).clear().type("5")
        cy.wait(2000)
    }

    clickOnAddToCartButton(){
        cy.get(this.webLocators.AddToCartBtn).click()
        cy.wait(5000)
    }

    clickOnShoppingCartLnk(){
        cy.get(this.webLocators.ShoppingCartLnk).click()
        cy.wait(2000)
    }



}