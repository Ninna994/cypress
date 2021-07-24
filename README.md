# Cypress tutorial

## Important commands for starting up

- _npm init_ - initialization of package.json file where we can put all the neccessary information

- _npm install_ - installs all the important files

- _./node_modules/.bin/cypress open_ - opens Cypress test runner

```js
<reference types="Cypress" /> // Command that tells that we are writing Cypress code - put at the begining of the file
```

## Key folders & Files

- _node_modules_ -key dependencies
- _cypress.json_ - change default values

---

## Mocca

- _describe()_ - functiion that gruoups test cases

```js
describe("Name of the test group / Description", callback_function() => {});

describe("Description", () => {});
```

- _it()_ - function for individual test case

```js
it("Test case", callback_function() => {})
```

- _it.only()_ - function that executes only selected test from the gruop of tests

---

## Cypress important functions [Link](https://docs.cypress.io/api/table-of-contents)

1. _visit_ - Visit a remote URL

```js
cy.visit("BASE URL");
```

1. _get_ - Get one or more DOM elements by selector or alias

```js
cy.get(selector);
cy.get(alias);
cy.get(selector, options);
cy.get(alias, options);
```

1. _click_ - Click a DOM element

```js
.click()
.click(options)
.click(position)
.click(position, options)
.click(x, y)
.click(x, y, options)
```

```js
// Options:
cy.click({force: true}) - if element is not visible on the page or has set 0x0 w/h force click on it to proceed with test
```

1. _type_ - Type into a DOM element

```js
.type(text)
.type(text, options)
```

## Selectors

- Select by name : [name = "name"]
- Select by type : [type = "type"]
- XPATH selectors

  - nodename - All nodes with the name "nodename"
  - / - Selects from the root node
  - // - Selects nodes in teh documents from the current node that match the selection no matter where they are
  - . - Selects the current node
  - .. - Selects the parent of the current node
  - @ - Selects attributes
  - \* wild card
  - $ - look at the end of whatever we search for
  - ^ - starts with

  ```js
  //By tag name
  cy.get("input");

  //By attribute name and value
  cy.get("input[name='first_name']");

  //By id
  cy.get("#contact_me");

  //By class
  cy.get(".feedback-input");

  //By multiple classes
  cy.get("[class='navbar navbar-inverse navbar-fixed-top']");

  //By two different attributes
  cy.get("[name='email'][placeholder='Email Address']");

  //By xpath
  cy.xpath("//input[@name='first_name']");
  ```

## Plugins

1. cypress XPath

```js
npm install -D cypress-xpath
// Then include in projects cypress/support/index.js
require('cypress-xpath)
```
