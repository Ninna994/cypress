/// <reference types='Cypress' />

describe('Get request', () => {

    var result

    it('Validate status code of the /posts API', () => {
        result = cy.request("localhost:3000/posts")
        result.its("status").should("equal", 200)
    })

    it('Validate weather object has specific value', () => {
        cy.request({
            method: "GET",
            url: "localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body)) //response is in correct format
            cy.log(body)

            expect(body[0]).has.property("title", "Example JSON server")
            expect(body[1]).has.property("author", "Ninushka")
            expect(body[2]).has.property("id", 9)
        })
    })
    it.only('Loop through object and validate weather he object contains keys', () => {
        cy.request({
            method: "GET",
            url: "localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body)) //response is in correct format
            body.forEach(function (item) {
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + item["author"] + " & Title: " + item["title"])
            })
        })
    })

})