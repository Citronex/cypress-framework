/// <reference types="Cypress" />
import { pokeapi_base_url } from '../../../../config'

describe('Rest API Test with Cypress', () =>  {
    it('API Test - Validate Header', () => {
        cy.request(`${pokeapi_base_url}v2/pokemon/25`)
        .as('pokemon')
        cy.get('@pokemon')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })

    it('API Test - Validate Status Code', () => {
        cy.request(`${pokeapi_base_url}v2/pokemon/25`)
        .as('pokemon')
        cy.get('@pokemon')
        .its('status')
        .should('equal', 200)
    })
})