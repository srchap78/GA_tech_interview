//4. Add a recipient
//6. Verify that recipient has been added

import DashboardPOM from './pom/dashboard.pom.js'
import DocumentsPOM from './pom/documents.pom.js'

describe('4.6. Adds and verifies recipient', () => {

    let Dashboard = new DashboardPOM
    let Documents = new DocumentsPOM

    it('Completes the steps of the challenge', () => {

        //login() is in /cypress/support/commands.js
        cy.login()

        Dashboard.getDocumentBtn()
            .click();

        cy.server();
        cy.route('POST', 'https://app.getaccept.com/get/document/list').as('documentXHR')
            .wait('@documentXHR').its('status').should('equal', 200)

        Documents.getDraftsBtn()
            .should('be.visible')
            .click();

        //Assert page is the draft list
        cy.url()
            .should('contain', '/document/draft')

        cy.server();
        cy.route('POST', 'https://app.getaccept.com/get/beta/flag').as('documentXHR')
            .wait('@documentXHR').its('status').should('equal', 200)

        //To verify document name is under the draft list
        Documents.getSpecificDoc()
            .should('contain', 'sample')
            .click()

        //Adds recipient
        
        cy.server();
        cy.route('GET', ' https://app.getaccept.com/get/settings/email-templates').as('documentXHR')
            .wait('@documentXHR').its('status').should('equal', 200)

        Documents.getAddRecipientBtn()
            .should('be.visible')
            .click()

        Documents.getRecipientField()
            .should('be.visible')
            .type('Some Dude{enter}')

        Documents.getRecipientEmailField()
            .type('somedude@someemail.com')

        Documents.getRecipientSubmitBtn()
            .click()

        //Verifies recipient has been added
        Documents.getRecipientNames()
            .should('contain', 'Some Dude')

    })

})