import BasePage from "../BasePage";

export default class FeedbackPage extends BasePage {

    static load() {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    }

    static submitFeedback() {
        cy.fixture('feedback').then(data => {

            cy.get('#name').type(data.name)  
            cy.get('#email').type(data.email)  
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.message)   
            cy.contains('Send Message').click()     
        })
    }
}