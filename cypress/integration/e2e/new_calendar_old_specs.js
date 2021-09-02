describe('Calendar Tests', () => {
    before(() => {
        cy.visit('/')
    })

    it.only('Should have a "Today" button visible', () => {
        cy.isVisible('.fc-today-button')
    })

    it('Should have a "Now line" displayed', () => {
        cy.get('.fc-timegrid-now-indicator-line').should('exist')
    })

    it('should check for correct font in title ', () => {
        cy.get('h2.fc-toolbar-title').should('have.css', 'font-family')
        .and('match', /Averta/)
    })

    it('should click on tomorrow\'s arrow and be taken to next day', () => {
        function join(t, a, s) {
            function format(m) {
               let f = new Intl.DateTimeFormat('en', m);
               return f.format(t);
            }
            return a.map(format).join(s);
         }
         
         let a = [{month: 'long'}, {day: 'numeric'}, {year: 'numeric'}];
         let s = join(new Date(), a, ',');
         let newDate = s.replace(',', ' ')
        
        cy.get('.fc-next-button').click()
        cy.get('.fc-toolbar-title').should('not.have.text', newDate)
    })

    it('should return to today\'s date after clicking the today button', () => {
        function join(t, a, s) {
            function format(m) {
               let f = new Intl.DateTimeFormat('en', m);
               return f.format(t);
            }
            return a.map(format).join(s);
         }
         
         let a = [{month: 'long'}, {day: 'numeric'}];
         let s = join(new Date(), a, ',');
         let newDate = s.replace(',', ' ')
        cy.get('button')
        .contains('Today')
        .click()

        cy.get('h2')
        .contains(newDate.replace(',', ', '))
    })

    it('should have 4 resources in the calendar', () => {
        cy.get('.fc-col-header-cell.fc-resource').as('resource_column')
        cy.get('@resource_column')
        .its('length')
        .should('eq', 4, { log: true })
    }) 

})