class HomePage {

    navigate() {
        cy.visit('/inventory')
    }

    validateThePage() {
        cy.get('.app_logo').should('contain.text', 'Swag Labs')
        cy.get('.inventory_item').should('be.visible')
        cy.get('#shopping_cart_container').should('be.visible')
        cy.xpath('//button[@class="btn btn_primary btn_small btn_inventory"]').should('be.visible')
    }

    addItemToCart(itemArr) {
        for(let item of itemArr) {
            let lowerCaseItem = item.toLowerCase()
            let itemArray = lowerCaseItem.split(/[ -]/)
            let myStr = ''
            for( let i = 0; i < itemArray.length; i++) {
                myStr += `-${itemArray[i]}`
                }
        
            console.log(myStr)
            cy.get(`[data-test="add-to-cart-sauce-labs${myStr}"]`).click()
        }
        cy.get('.shopping_cart_badge').should('have.text', `${itemArr.length}`)
    } 

    validateItemInCart(){
        cy.get('.inventory_item_name').should('contain.text', 'Backpack')
    }

    goToCart() {
        cy.get('.shopping_cart_link').click()
    }
    

    validateCartContainsSelectedItems(firstname, lastname, zipcode) {
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('contain', `Backpack`, 'T-shirt')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type(firstname)
        cy.get('[data-test="lastName"]').type(lastname)
        cy.get('[data-test="postalCode"]').type(zipcode)
        cy.get('[data-test="continue"]').click()
    }           
}

    


export default HomePage