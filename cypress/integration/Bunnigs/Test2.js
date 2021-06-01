/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('Product not avaialbe',function() {


    cy.visit("https://www.bunnings.com.au/")
    cy.get('#custom-css-outlined-input').type('Namresh{enter}')
    cy.wait(2000)
    cy.get('.MuiTypography-root MuiTypography-body2').then(function(element)
      {
         const actualText=element.text()
        expect(actualText.includes("We found 0 results for")).to.be.true
      })
    
        })
})