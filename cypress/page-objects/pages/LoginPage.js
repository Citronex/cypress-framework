import BasePage from "../BasePage"
export default class LoginPage extends BasePage {
    static login(username, passowrd) {
        cy.login(username, passowrd)
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage() {
        //custom command 'isVisible' from commands.js
        cy.isVisible('.alert.alert-error')
    }
}