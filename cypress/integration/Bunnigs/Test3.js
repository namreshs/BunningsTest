/// <reference types="Cypress" />

describe('My Third Test Suite', function() 
{

it('Search from dynamic DropDown',function() {

//Check boxes
cy.visit("https://www.bunnings.com.au/")
cy.get('#custom-css-outlined-input').type('Morgan')

//Dynamic dropdowns
cy.get('.PopularRecentSuggestionsstyle__LinkContainer-sc-118y7wk-3 ihCVpA terms0 div').each(($e1, index, $list) => {

    if($e1.text()==="Morgan bins")
    {
        $e1.click()
    }


})
//autocomplete
cy.get('.highLightedText').should('have.value','Morgan')
//visible invisible
cy.get('.highLightedText').should('be.visible')






















}  )



}  )