export default class Navbar {

    static clickOnLogo() {
        cy.get('.brand').click()
    }

    static search(text) {
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static displaySigninButton() {
        cy.isVisible('#signin_button')
    }

    static clickSignInButton() {
        cy.get('#signin_button').click()
    }

    static clickSettingsDropdown() {
        cy.contains('Settings').click()
    }

    static clickLogout() {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }

}