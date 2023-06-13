/// <reference types="cypress"/>

describe('Login to Instagram web-app', () => {
  
  it('Login with valid account', () => {
    cy.visit('https://www.instagram.com/');
  })
})