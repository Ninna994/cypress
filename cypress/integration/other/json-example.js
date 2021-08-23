/// <reference types='Cypress' />

describe('JSON Object', () => {

    it('JSON object Examples', () => {
        const exampleObject = {
            "key": "Miloš",
            "key2": "Nina"
        }
        cy.log("Outputting key:value pairs from json object")
        cy.log(exampleObject["key"]) //Milos
        cy.log(exampleObject.key) //Milos
        cy.log(exampleObject["key2"]) // Nina
        cy.log(exampleObject.key2) // Nina

        const exampleArrayOfValues = ["Sophie", "Rose", "Mike", "Ron"]

        cy.log("Outputting values from json array")
        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])
        cy.log(exampleArrayOfValues[3])

        const users = {
            "firstName": "Nikolina",
            "lastName": "Djekic",
            "age": 27,
            "students": [{
                    "firstName": "Milos",
                    "lastName": "Djekic 1",
                    "age": 26
                },
                {
                    "firstName": "Lazar",
                    "lastName": "Sekulic",
                    "age": 16
                },
                {
                    "firstName": "Milka",
                    "lastName": "Sekulic 1",
                    "age": 51
                }
            ]
        }

        cy.log("Extracting JSON")
        cy.log(users.lastName) //last name in users
        cy.log(users.students[2].lastName) //Sekulic 1

        const exampleArrayOfObjects = [{
                "key": "Luke"
            },
            {
                "key2": "Marie"
            },
            {
                "key3": "Test"
            }
        ]

        cy.log(exampleArrayOfObjects[2].key3)
    })
})