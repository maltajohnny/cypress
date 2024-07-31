/// <reference types="cypress" />
const email = `test${Date.now()}@test.com`; // Unic e-mail

import { text } from "stream/consumers";
import { NEW_USER, LOGIN } from "./elements";
import { beforeAllTests } from "./utils";

class login {

  utils(){
    cy.get(beforeAllTests.close_dialg).click(); // Close the welcome Dialg window
    cy.get(beforeAllTests.nav_bar_account).click();
    cy.get(beforeAllTests.nav_bar_login_button).click();
  }

  create_newUser() {

   let tempMail = email;
    cy.fixture('user').then((user) => {

      // Validate Mask
      cy.get(NEW_USER.new_customer_link).click()
      cy.get(NEW_USER.email).type(user.invalid_email)
      cy.get('body').click();
      cy.get('#mat-error-7').should('be.visible')
      cy.get(NEW_USER.password).type(user.invalid_password)
      cy.get('body').click();
      cy.get('#mat-error-8').should('be.visible')
      cy.get(NEW_USER.repeat_password).type(user.invalid_password + 1);
      cy.get('body').click();
      cy.get('#mat-error-10').should('have.text', ' Passwords do not match ')
      cy.get('#mat-error-8').should('be.visible')
      cy.reload()

      // Create new User and make login / Logout
      cy.get(NEW_USER.email).type(tempMail);
      cy.get(NEW_USER.password).type(user.password);
      cy.get(NEW_USER.repeat_password).type(user.password);
      cy.get(NEW_USER.open_sec_question).click();
      cy.get(NEW_USER.select_sec_question).contains('Name of your favorite pet?').click();
      cy.get(NEW_USER.sec_Answer_Control).type('Fluffy');
      cy.get(NEW_USER.register_button).click();
  
      cy.get(NEW_USER.register_confirmation_snackBar).should('contain', 'Registration completed successfully. You can now log in.');

      cy.get(LOGIN.email).type(tempMail);
      cy.get(LOGIN.password).type(user.password)
      cy.get('#loginButton').click()
      cy.get('#navbarAccount').click()
      cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span')
      .should('be.visible')
      .invoke('text')
      .then((text => {
        expect(text.trim()).to.equal(tempMail)
      }))
      cy.get('#navbarLogoutButton').click()
    })
   
  }
  
  falseCredentials() {
    cy.fixture('user').then((user) => {

      // Validate with a false e-mail
      cy.get(LOGIN.email).type(email);
      cy.get(LOGIN.password).type(user.password)
      cy.get('#loginButton').click()
      cy.get('.error').should('be.visible')
      cy.reload()


      // Validate with a false password
      cy.get(LOGIN.email).type(user.email);
      cy.get(LOGIN.password).type(user.false_password)
      cy.get('#loginButton').click()
      cy.get('.error').should('be.visible')
      // cy.reload()

    })
  
  }

  invalidCredentials() {
    cy.fixture('user').then((user) => {

      // Validate with an invalid e-mail
      cy.get(LOGIN.email).type(user.invalid_email);
      cy.get(LOGIN.password).type(user.password)
      cy.get('#loginButton').click()
      cy.get('.error').should('be.visible')
      cy.reload()


      // Validate with an invalid password
      cy.get(LOGIN.email).type(user.email);
      cy.get(LOGIN.password).type(user.invalid_password)
      cy.get('#loginButton').click()
      cy.get('.error').should('be.visible')
      // cy.reload()

    })
  }
sqlInjectionTest() {


  // SQL Injection E-mail input
  // Payload de SQL Injection
  const sqlInjectionPayload = "' OR '1'='1";

  // Digita o payload no campo de e-mail
  cy.get('input[name="email"]').type(sqlInjectionPayload);

  // Digita qualquer senha (não precisa ser válida)
  cy.get('input[name="password"]').type('randompassword');

  // Tenta fazer login
  cy.get('#loginButton').click();

  // Verifica se há uma mensagem de erro ou se o login não é bem-sucedido
  cy.get('.error').should('be.visible');

  // SQL Injection Password input
  cy.reload()

   // Digita um e-mail válido
   cy.get('input[name="email"]').type('validemail@test.com');

   // Digita o payload no campo de senha
   cy.get('input[name="password"]').type(sqlInjectionPayload);

   // Tenta fazer login
   cy.get('#loginButton').click();

   // Verifica se há uma mensagem de erro ou se o login não é bem-sucedido
   cy.get('.error').should('be.visible');
}
  
}
export default new login();
