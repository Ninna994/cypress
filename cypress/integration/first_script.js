describe("My first test", function (){
  it("Does not do much!", function () {
    expect(true).to.equal(true)
  })
})
describe("My second test", function () {
  it("Visit page, find element, click on that element and check if url matches", function () {
    // visit given url
    cy.visit('https://example.cypress.io')
    // pause at every step, kjust once
    cy.debug()
    // contains some text and click on it
    cy.contains('type').click()
    // check if url after that command has /commands/actions inside
    cy.url().should('include', '/commands/actions')

    // get input by CSS
    cy.get('.action-email')
      // type inside that input
      .type('fake@email.com')
      // check if value is present
      .should('have.value', 'fake@email.com')
  })
})