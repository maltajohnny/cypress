/// <reference types="cypress" />
import login from "../support/pages/index"

describe('OWASP Juice Shop Registration and Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    login.utils()
  });
  it('Should be visible an alert after typing False Credentials', () => {
      login.falseCredentials()
  });

  it('Should be visible an alert after typing Invalid Credentials', () => {
    login.falseCredentials()
});

  it('Should register a new user successfully', () => {
    login.create_newUser()
   
  });

  it('Should validate SQL Injection ', () => {
      login.sqlInjectionTest()
  });
});
