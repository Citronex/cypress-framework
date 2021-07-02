/// <reference types="Cypress" />
import { pokeapi_base_url, url } from '../../../config'

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

    it('API  Test  - Validate Name Value', () => {
        cy.request(`${pokeapi_base_url}v2/pokemon/25`).as('pokemon')
        cy.get('@pokemon')
        .its('body')
        .should('include', { name: 'pikachu' })
    })

    it('API Test - Validate Negative Status Code', () => {
        cy.request({
            method: 'GET',
            url: `${pokeapi_base_url}v2/pokemon/10000`,
            failOnStatusCode: false
        }).as('pokemon')
        cy.get('@pokemon')
        .its('status')
        .should('equal', 404)

    })
})