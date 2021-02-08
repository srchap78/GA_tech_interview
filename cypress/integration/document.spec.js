//2. Press "new document" button
//3. Upload a small pdf document
//Document is /cypress/fixutures/sample.pdf

import 'cypress-file-upload'
import DashboardPOM from './pom/dashboard.pom.js'
import DocumentsPOM from './pom/documents.pom.js'



describe('2.3. Presses new Document button and uploads sample.pdf', () => {

  let Dashboard = new DashboardPOM
  let Documents = new DocumentsPOM

  it('Clicks on the new document button', () => {

    //login() is in /cypress/support/commands.js
    cy.login()

    Dashboard.getNewDocumentBtn()
      .click();

    Dashboard.getNewDocSalesBtn()
      .should('be.visible')
      .click();

      cy.server();
      cy.route('GET', 'https://app.getaccept.com/get/settings/email-templates').as('documentXHR')
          .wait('@documentXHR').its('status').should('equal', 200)

    //uses file /cypress/fixtures/sample.pdf and simulates drag and dropping the file
    let filePath = 'sample.pdf'
    Documents.getUploadBtn()
      .click()
      .attachFile(filePath, { subjectType: 'drag-n-drop',  })

    //assertion to verify that a document has been uploaded and the user has landed on the draft page
    cy.contains('Draft')
      .should('exist');


  });

})