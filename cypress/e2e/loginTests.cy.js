import { loginPage } from "../pages/loginPage"
import { homePage } from "../pages/homePage"

const loginPageObj = new loginPage()
const homePageObj = new homePage()
import loginData from '../../cypress/fixtures/loginData.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('test Automation',()=>{

    it('eCommerce Test',()=>{

        homePageObj.openURL()
        loginPageObj.loginToeCommerceAccount(loginData.email,loginData.password)        

    })
})