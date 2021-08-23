/// <reference types='Cypress' />

describe('DELETE Request', () => {

    it('Delete an existing post via /posts API', () => {
        cy.request({
            method: "DELETE",
            url: "localhost:3000/posts/12",

        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    // it('', () => {

    // })

})