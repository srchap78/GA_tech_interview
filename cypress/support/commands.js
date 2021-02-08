// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

/* Cypress.Commands.add("login", () => {
    cy.request({
        method: 'POST',
        url: 'https://app.getaccept.com/get/login',
        body: "login-email=rtspnett%40baybabes.com&login-password=1234Abcd&action=login&user-connect-identity=&go=&recaptcha_response=03AGdBq251KOMk5roIg6GSWGMJ_B_pjKvseq1T1JZhwZV6RaAW4xVUxbz6SwSVdyLGzcnAg0-obcV8T8Zu3C1g12Fif5Xp8xHT8Y4mf82vvsXEaRck0c5eOGk_yFcegUUS1EZNltILjD_ergmutNk85VtBKBZuDhuxcrL0spscw9LcZc0kFGr5r3d1sYUe7E7p7ygqeolrTeU2jJp7XySBpuAiFRroguxjNDhSoEtfxT2F-d6JeBIWqk7tQx3kWop6Y-sczbHvcUYV106jyYzNBRLqZUKjL-F5-3jFRC892bLYu3P0vc09ETbf5H_31UYBBESB68DI-Mqs_5yr0cMpZZhgxDxUwPjn07KMvnCOBi6JzFiHZDb_JC7iiwehcx0C0RaEv2AY0Argh5PCc1Xt67LbRi8ZC6xEkSTOALE3qf-TjmW-QDu-lL02nQ1DjINHLwaP2etI4YLp",
    })

.then((resp) => {
    window.localStorage.setItem('resp', resp)

}) 
});*/


//work a loop into this or something. text entry is flakey.
Cypress.Commands.add("login", () => {
    cy.visit('https://app.getaccept.com/')
    cy.get('#login-email')
        //workaround for flakiness of text being cut off
        /* .type("this is to be erased", {
            delay: 200
        })
        .clear() */
        .type("rtspnett@baybabes.com", {delay:100})
        .should('have.value', "rtspnett@baybabes.com");

    cy.get('#login-password')
        .type("1234Abcd")
        .should('have.value', "1234Abcd");
    cy.get('#btn-login')
        .click();
    //assertion to verify that the user is logged in and at their dashboard
    cy.url()
        .should('include', '/dashboard')

})