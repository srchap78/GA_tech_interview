export default class LoginPOM {

    getEmailField() {
        return cy.get('#login-email')
    }

    getPasswordField() {
        return cy.get('#login-password')
    }


    getLoginBtn() {
        return cy.get('#btn-login')
    }
}