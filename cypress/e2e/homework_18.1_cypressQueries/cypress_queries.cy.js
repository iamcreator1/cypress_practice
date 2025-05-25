/// <reference types="cypress"/>


describe('checking elements', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto'
        }
      })
    })
    context('get elements in header', () =>{
      it('get logo link', () => {
        cy.get('.header_logo')
      })
  
      it('get home link', () => {
        cy.get('nav.header_nav a[href="/"]')
      })
  
      it('get about link', () => {
        cy.get('button.btn.header-link[appscrollto="aboutSection"]')
      })
  
      it('get contact link', () => {
        cy.get('button.btn.header-link[appscrollto="contactsSection"]')
      })
  
      it('get sign in button', () => {
        cy.get('button.btn.btn-outline-white.header_signin')
      })
  
  
    })
  
    context('get elements in the footer', () => {
      it('get official website link', () => {
        cy.get('a.contacts_link.display-4')
      })
      it('get email link', () => {
        cy.get('a.contacts_link.h4')
      })
    })
  })