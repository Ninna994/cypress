/// <reference types='Cypress' />

describe('Signup', () => {

  let randomString = Math.random().toString(36).substring(2)
  let username = "Auto" + randomString
  let email = "auto_" + randomString + "@gmail.com"
  let password = "Password1"

  it('Test valid signup', () => {
    cy.server()
    cy.route("POST", "**/users").as("newUser")
    cy.visit("http://localhost:4200/")
    cy.get('.nav').contains("Sign up").click()

    cy.get('[placeholder="Username"]').type(username)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('button').contains('Sign up').click()


    // Assertions

    cy.wait("@newUser")
    cy.get("@newUser").should((xhr) => {
      expect(xhr.status).to.equal(200)
      expect(xhr.request.body.user.username).to.equal(username)
      expect(xhr.request.body.user.email).to.equal(email)
    })
  })

  it('Test valid login', () => {
    cy.visit("http://localhost:4200/")

    cy.get('.nav').contains("Sign in").click()

    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('button').contains('Sign in').click()
    cy.get(':nth-child(4) > .nav-link').should('be.visible')

  })

  it('Mock global feed data', () => {
    cy.server()
    cy.route("GET", "**/articles/**", "fixture:testArticles.json").as('articles')

    cy.visit("http://localhost:4200/")

    cy.get('.nav').contains("Sign in").click()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(password)
    cy.get('button').contains('Sign in').click()
    cy.wait("@articles")
  })

})
