/// <reference types='Cypress' />

describe('Handling datepickers', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#datepicker').scrollIntoView().invoke('removeAttr', 'target').click({
            force: true
        })
    })
    it('Select date from datepicker', () => {
        let date = new Date()
        date.setDate(date.getDate()) //get current day
        cy.log("Current date is: " + date.getDate())

        let datePlusFive = new Date()
        datePlusFive.setDate(datePlusFive.getDate() + 5)
        cy.log("In five days it will be: " + datePlusFive.getDate())
    })

    it.only('Create future day, year, date', () => {
        var day = new Date()
        day.setDate(day.getDate() + 50)

        var futureYear = day.getFullYear()
        var futureMonth = day.toLocaleString("default", {
            month: "long"
        })
        var futureDay = day.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)


        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {

                }
            })
        }
    })



})