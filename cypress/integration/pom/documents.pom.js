export default class DocumentsPOM {

getDraftsBtn() {
    return cy.get('[href="/document/draft"]')
}

getSpecificDoc() {
     return cy.get('#document-list > tbody > tr > td:nth-child(2) > a')
            
}

//perhaps there should be a document sidebar pom?
getAddRecipientBtn() {
    return cy.get(':nth-child(1) > .sidebar-button-text');
}

getRecipientField() {
    return cy.get('#add-recipient-search2');
}

getRecipientEmailField() {
    return cy.get('#recipient-email')
}

getRecipientSubmitBtn() {
    return cy.get('#submit')
}

getRecipientNames() {
    return cy.get('.row > .document-recipient-list > [disabled="disabled"] > .recipient-list-item-container > .recipient-list-item > .recipient-mid > .recipient-info-container > .name')
}

getUploadBtn() {
    return     cy.get('#upload-button')
}

getDraftMoreOptions(){
    return cy.get('[data-v-e150ab34=""] > .options-menu-button > .options-icon')
}

getDraftMoreOptionsDel(){
    return cy.get(':nth-child(3) > .option-container > .option-label > .option-title')
}

getDraftMoreOptionsDelConfirm(){
    return cy.get('#delete-button')
}

}