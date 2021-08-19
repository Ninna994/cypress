class Homepage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('webdriverUni_Homepage'), {
            timeout: 60000
        });
    }
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({
            force: true
        })
    }
}
export default Homepage_PO