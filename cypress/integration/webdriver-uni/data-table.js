/// <reference types='Cypress' />

describe('Handling data via webdriveruni', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#data-table').scrollIntoView().invoke('removeAttr', 'target').click({
            force: true
        })
    })

    it("Calculate and assert the total age of all users", () => {
        var userDetails = []
        let numb = 0
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                cy.log(userDetails[i])
            }
            cy.log("Total of all ages in table is: " + numb)
            expect(numb).to.eq(322)
        })
    });

    it.only("Calculate and assert the age of user by providing surname", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(3)').eq(index).then(function (age) {
                    const userAge = age.text()
                    expect(userAge).to.eq("80")
                })
            }
        })

    });

})