/// <reference types='Cypress' />

describe('Handling file upload', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({
            force: true
        })
    })
    it('Upload file', () => {
        cy.fixture('user.jpg', 'base64').then(fileContent => {
            cy.get("#myFile").attachFile({
                fileContent,
                fileName: "user.jpg",
                mimeType: "image/jpg"
            }, {
                uploadType: "input"
            })
        })
        cy.get('#submit-button').click()
    })

    it.only('Upload no file', () => {
        cy.get('#submit-button').click()
    })



})