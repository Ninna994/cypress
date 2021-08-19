class Homepage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('webdriverUni_Homepage'));
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({
            force: true
        })
    }
}
export default Homepage_PO