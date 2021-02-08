export default class DashboardPOM {

getNewDocumentBtn() {
    return cy.get('.new-document-button > .hidden-xs-and-down')
}

getNewDocSalesBtn() {
    return cy.get('body > div.app.menu-collapsed > div.topbar > div.right > div.new-document-container > ul > li:nth-child(1) > span')
}

getDocumentBtn() {
    return cy.get('#main-menu > li.menu-item.pendo--menu-item-document > div > i')
}

}