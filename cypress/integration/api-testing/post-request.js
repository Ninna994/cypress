/// <reference types='Cypress' />

describe('Post request', () => {

    var titleOfPosts = new Array()
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)

    it('Create a new post via /posts API and validate status code is 201', () => {
        cy.request({
            method: "POST",
            url: "localhost:3000/posts",
            body: {
                // "title": "Do you want to learn automation testing",
                "title": randomTitle,
                "author": "Nikolina Nina Ina"
            }
        }).then(response => {
            expect(response.status).to.equal(201)
        })
    })
    it('Validate title of latest post and confirm weather it is corrent', () => {
        cy.request({
            method: "GET",
            url: "localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(function (item) {
                titleOfPosts.push(item["title"])
            })
        }).then(() => {
            var latestPost = titleOfPosts[titleOfPosts.length - 1]
            // expect(latestPost).to.equal("Do you want to learn automation testing")
            expect(latestPost).to.equal(randomTitle)
        })
    })
    it.only('Dinamic data', () => {
        cy.log(randomTitle)
    })

})