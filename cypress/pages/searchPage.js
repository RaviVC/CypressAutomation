export class searchPage {
    webLocators = {     
        productBoxAddToCartBtn: '.button-2.product-box-add-to-cart-button',
    }

    clickOnProductCartButton(){
        cy.get(this.webLocators.productBoxAddToCartBtn).click()
        cy.wait(2000)
    }
    
}