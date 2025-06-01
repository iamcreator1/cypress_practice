/// <reference types="cypress"/>

import '../../support/commands'

describe('login with custom comman', () => {
    it('should login successfully', () => {
        cy.login()
    })
})