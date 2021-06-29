import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
    before(function() {
        FeedbackPage.load()
    })

    it('should submit feedback form', () => {
        FeedbackPage.submitFeedback()
        cy.url().should('eq', 'http://zero.webappsecurity.com/sendFeedback.html')

    })
})