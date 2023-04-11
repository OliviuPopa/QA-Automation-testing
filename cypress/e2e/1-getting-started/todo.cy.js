/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
    const username = 'standard_user'
    const password = 'secret_sauce'

    cy.get('[data-test="username"]').type(`${username}{enter}`).should('have.value', 'standard_user');
    cy.get('[data-test="password"]').type(`${password}{enter}`);
    cy.get('[data-test="login-button"]').click();
  })

 

  it.skip('Log in', () => {
    // We'll store our item text in a variable so we can reuse it
    const username = 'standard_user'
    const password = 'secret_sauce'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test="username"]').type(`${username}{enter}`).should('have.value', 'standard_user');
    cy.get('[data-test="password"]').type(`${password}{enter}`);
    cy.get('[data-test="login-button"]').click();
    cy.get('.app_logo').should('contain.text', 'Swag Labs');
  })

  it('Add to cart', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#item_4_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('#item_0_title_link > .inventory_item_name').should('contain.text', 'Sauce Labs Bike Light');

  })

  it('Go to checkout', () => {

    // cy.visit('/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_link').click()
    cy.xpath('//button[@class="btn btn_action btn_medium checkout_button"]').click()
    cy.get('[data-test="firstName"]').type('Oliviu')
    cy.get('[data-test="lastName"]').type('Popa')
    cy.get('[data-test="postalCode"]').type('020231')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_total_label').should('contain.text', '$43.18')
    



  })



  
      


})
