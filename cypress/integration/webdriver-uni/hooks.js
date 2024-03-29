/// <reference types='Cypress' />

describe('Hooks', () => {
    before(() => {
        cy.log('BEFORE() runs once before all tests in the block')
    })

    beforeEach(() => {
        cy.log("BEFOREEACH() runs before each test in the block")
    })

    afterEach(() => {
        cy.log("AFTEREACH() runs after each test in the block")
    })

    after(() => {
        cy.log("AFTER() runs once after all tests in the block")
    })

    it("Example test 1", () => {
        cy.log("Example test 1")
    })
    it("Example test 2", () => {
        cy.log("Example test 2")
    })
    it("Example test 3", () => {
        cy.log("Example test 3")
    })
})