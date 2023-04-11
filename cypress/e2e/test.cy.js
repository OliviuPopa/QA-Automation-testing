/// <reference types="cypress" /> 

import Loginpage from "../pages/Login";
import HomePage from "../pages/Home";

describe('Test suite', function() {

    it.skip('Login', () => {
        const login = new Loginpage();
        login.navigate();
        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.submit();
    }) 
    
    it('Add to cart', function() {
        const login = new Loginpage();
        const home = new HomePage();
        login.navigate()
        login.completeLogin()
        home.validateThePage()
        home.addItemToCart(['Bolt t-shirt', 'Backpack'])
        home.validateCartContainsSelectedItems('Oliviu', 'Popa', '020231')
        // cy.url().should('include', 'checkout-step-two')
        

    })  
})