//1. Login to GetAccept

import LoginPOM from './pom/login.pom.js';

let email = "rtspnett@baybabes.com";
let password = "1234Abcd";

describe('1. Login to GetAccept', () => {

    it('Logs in to GetAccept Account', () => {

        let Login = new LoginPOM

        cy.visit('https://app.getaccept.com/')

        Login.getEmailField()
            .type(email, {delay:200})
            .should('have.value', email);

        Login.getPasswordField()
            .type(password)
            .should('have.value', password);

        Login.getLoginBtn()
            .click();

        //Assertion to verify that the user is logged in and at their dashboard
        cy.url()
            .should('include', '/dashboard')

    });

})