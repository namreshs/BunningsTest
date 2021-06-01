/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('Search a known product',function() {


cy.visit("https://www.bunnings.com.au/")
cy.get('#custom-css-outlined-input').type('Morgan Stainless Steel Twin Compartment Pedal Bin{enter}')
cy.wait(2000)
cy.get('[data-locator=search-product-tile-title-0]').then(function(element)
  {
     const actualText=element.text()
    expect(actualText.includes("Morgan Stainless Steel Twin Compartment Pedal Bin")).to.be.true
  })

    })
})