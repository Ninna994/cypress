/// <reference types='Cypress' />

describe('PUT Request', () => {

    it('Update an existing post via /posts API', () => {
        cy.request({
            method: "PUT",
            url: "localhost:3000/posts/8",
            body: {
                // "title": "Do you want to learn automation testing",
                "title": "Updated title - Test",
                "author": "Nikolina Nina Ina Test Update PUT method"
            }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })


})