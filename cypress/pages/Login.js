class Loginpage {

    navigate() {
        cy.visit('/')
    }

    enterUsername(username) {
        cy.get('[data-test="username"]')
        .clear()
        .type(`${username}`)
        return this   
    }

    enterPassword(password) {
        cy.get('[data-test="password"]')
        .clear()
        .type(`${password}`)
        return this
    }

    submit() {
        cy.get('[data-test="login-button"]').click()
    }

    completeLogin() {
        cy.get('[data-test="username"]').clear()
          .type(`standard_user`)
        cy.get('[data-test="password"]').clear()
          .type(`secret_sauce`)
        cy.get('[data-test="login-button"]').click()


    }
}

export default Loginpage