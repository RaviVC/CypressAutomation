import { homePage } from "../pages/homePage"
import { loginPage } from "../pages/loginPage"
import { searchPage } from "../pages/searchPage"
import { searchResultsPage } from "../pages/searchResultsPage"
import { cartPage } from "../pages/cartPage"
import searchData from '../../cypress/fixtures/searchData.json'
import cartData from '../../cypress/fixtures/cartData.json'


const loginPageObj = new loginPage()
const homePageObj = new homePage()
const searchPageObj = new searchPage()
const searchResultsPageObj = new searchResultsPage()
const cartPageObj = new cartPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('test Automation',()=>{

    it('eCommerce Test',()=>{

        homePageObj.openURL()
        homePageObj.enterProductInSearchEditField(searchData.productName)
        homePageObj.clickOnSearchBtn()
        searchPageObj.clickOnProductCartButton()
        searchResultsPageObj.enterProductQuantity()
        searchResultsPageObj.clickOnAddToCartButton()
        searchResultsPageObj.clickOnShoppingCartLnk()
        cartPageObj.verifyProductSubTotal(cartData.productQuantity)

    })

    
})