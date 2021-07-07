///<reference types ="Cypress" />
import { chucknorrisapi_base_url } from '../../../config'

beforeEach(() => {
	cy.log('starting test')
})

describe('REST API Tests for api.chuchnorris.io', () => {
	it('API Test - Validate Status Code', () => {
		cy.request(`${chucknorrisapi_base_url}jokes/random`).as('joke')
		cy.get('@joke').its('status').should('equal', 200)
	})

	it('API Test - Validate body does contain a joke in the value field', () => {
		cy.request(`${chucknorrisapi_base_url}jokes/random`).as('joke')
		cy.get('@joke')
			.its('body')
			.should('have.property', 'value')
			.and('be.a', 'string')
	})
})
