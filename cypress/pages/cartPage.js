export class cartPage {
    webLocators = {
        
        productSubtotalField: '.product-subtotal'
        
    }
    
    verifyProductSubTotal(productQuantity){
        cy.get(this.webLocators.productSubtotalField).contains(productQuantity)
    }
}