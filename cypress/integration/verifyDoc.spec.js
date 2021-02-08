//5. Verify that document name is the same as pdf
//7. Verify that new document is in draft list in document list view

import DashboardPOM from './pom/dashboard.pom.js'
import DocumentsPOM from './pom/documents.pom.js'

describe('5.7. Verifies that the document name is the same and document is in list view', () => {

    let Dashboard = new DashboardPOM
    let Documents = new DocumentsPOM

    it('Verifies that a document is in draft list in document list view', () => {

        //login() is in /cypress/support/commands.js
        cy.login()

        Dashboard.getDocumentBtn()
            .click();

        cy.server();
        cy.route('POST', 'https://app.getaccept.com/get/document/list').as('documentXHR')
            .wait('@documentXHR').its('status').should('equal', 200);

        Documents.getDraftsBtn()
            .should('be.visible')
            .click();

        //assert page is the draft list
        cy.url()
            .should('contain', '/document/draft')

        cy.server();
        cy.route('POST', 'https://app.getaccept.com/get/beta/flag').as('documentXHR')
            .wait('@documentXHR').its('status').should('equal', 200)

        //To verify document name and it is in the draft list
        Documents.getSpecificDoc()
            .should('contain', 'sample')

        //delete sample file for re-running tests

         
        if(Documents.getSpecificDoc().should('contain', 'sample')){
        
        Documents.getSpecificDoc()
            .click()

        Documents.getDraftMoreOptions()
            .click()

        Documents.getDraftMoreOptionsDel()
            .click()

        Documents.getDraftMoreOptionsDelConfirm()
        .click() }   

    })
})