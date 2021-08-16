# Cypress tutorial

<!-- TOC -->

## Important commands

- _npm init_ - initialization of package.json file where we can put all the neccessary information

- _npm install_ - installs all the important files

- _./node_modules/.bin/cypress open_ - opens Cypress test runner

```js
<reference types="Cypress" /> // Command that tells that we are writing Cypress code - put at the begining of the file
```

- _run_ trigger _ALL_ tests from command line via _Headless Electron_

  ```js
  ./node_modules/.bin/cypress run
  ```

- _run --headed_ trigger _ALL_ tests from command line via _Headed Browser Electron_

  ```js
  ./node_modules/.bin/cypress run --headed
  ```

- _run --browser chrome_ trigger _ALL_ tests from command line via \_Headed Browser Chrome

  ```js
  ./node_modules/.bin/cypress run --browser chrome
  ```

- _run --spec RELATIVE-PATH_ trigger _ONE_ test from command line via _Headless Electron_

  ```js
  ./node_modules/.bin/cypress run --spec RELATIVE-PATH
  ```

- _run --spec RELATIVE-PATH-TO-FOLDER/\*_ trigger _ONE_ test from command line via _Headless Electron_

  ```js
  ./node_modules/.bin/cypress run --spec RELATIVE-PATH-TO-FOLDER/*
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

1. _eq_ - Get a DOM element at a specific index in an array of elements

```js
.eq(index)
.eq(indexFromEnd)
.eq(index, options)
.eq(indexFromEnd, options)

```

1. _contains_ - Get the DOM element containing the text. DOM elemets can contain more than th e desired text and still match.

```js
.contains(content)
.contains(content, options)
.contains(selector, content)
.contains(selector, content, options)

// ---or---

cy.contains(content)
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)

```

1. _find_ - Get the descendent DOM elements of a specific selector

```js
.find(selector)
.find(selector, options)

```

1. _document_ - Get the window.document of the page that is currently active

```js
cy.document();
cy.document(options);
```

1. _title_ - Get the document title property of the page that is currently active

```js
cy.title();
cy.title(options);
```

1. _url_ - Get the current URL of the page that is currently active

```js
cy.url(); // Gets current URL as a string
cy.url(options);
```

1. _log_ - Print a message to the Cypress Command Log

```js
cy.log(message); // Gets current URL as a string
cy.log(message, args, ...);
```

1. _then_ - Enables you to work with the subject yieded from the previous command. Controls what is the order of executing and displaying

```js
.then(callbackFn); // Gets current URL as a string
.then(options, callbackFn);
```

1. _each_ - Iterate through an array like structure(arrays or objects with a length property)

```js
.each(callbackFn);

cy.get("SELECTOR").each(($el, index, $list) => {

})
```

1. _wrap_ - Yield the object passed into .wrap() . If the object is a promise, yield its resolved value

```js
cy.wrap(subject);
cy.wrap(subject, options);
```

1. _invoke_ - Invoking JQuery and JS methods and funnctions

```js
cy.get(".modal").invoke("show");
```

1. _check_ - Check checkbox(es) or radios. This element must be an input width type checkbox or radio

```js
.check()
.check(value)
.check(values)
.check(options)
.check(value, options)
.check(values, options)
```

```js
.check('US')
.check(['US','EN'])
```

1. _uncheck_ - Check checkbox(es) or radios. This element must be an input width type checkbox or radio

```js
.uncheck()
.uncheck(value)
.uncheck(values)
.uncheck(options)
.uncheck(value, options)
.uncheck(values, options)
```

```js
.uncheck('US')
.uncheck(['US','EN'])
```

1. _select_ - Select an <option> within a <select>. We can select via value or via option text

```js
.select()
.select(value)
.select(values)
.select(options)
.select(value, options)
.select(values, options)
```

```js
.select('US')
.select(['US','EN'])
```

---

## Aliases

- Sharing context is the simplest way to use Aliases. To alias something you would like to share we use _as()_ command.
- Aliases are available as \*this.\*\*
- When we call aliases we use @ sign

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

---

## Plugins

1. cypress XPath

```js
npm install -D cypress-xpath
// Then include in projects cypress/support/index.js
require('cypress-xpath)
```

---

## Assertions - Chai library

Way of validating wheatger the application is bahaving and presented in a way which we expect.

- _should_
- _expect_
- _assert_
- Chainable words:

  ```js
  to, be, been, is, that, which, and, has, have, with, at, of, same
  ```

- _have.prop_, _have.attr_

---

## AssertionsMultiple tabs tricks

```js
// REMOVE target="_blank"

cy.get("#contact-us").invoke("removeAttr", "target").click({
  force: true,
});

//
```

## Same origin trick

```js
// set chromeWebSecurity to false in cypress.json
{
  "chromeWebSecurity": false
}
//
```

## Browser controls - Back, Forward, Reload

```js
//back
cy.go("back");
// forward
cy.go("forward");
// reload
cy.reload();
// hard reload
cy.reload(true);
```

## Handling JS events / Alerts

When handling JS events we use .on function

```js
cy.on("window:alert", (str) => {
  expect(str).to.equal("I am an alert box!");
});
```

When handling alerts automatically we use _window:alert_ - We cannot chanfge behaviour of clicking ok

When we need to Click Cancel or control alerts we use _window:confirm_

- Handling JS Alerts with stubs

```js
// Replace a function, record its usage and control its behavior
const stub = cy.stub();
cy.on("window:confirm", stub);

cy.get("#button4")
  .click()
  .then(() => {
    expect(stub.getCall(0)).to.be.calledWith("Press a button!");
  })
  .then(() => {
    return true;
  })
  .then(() => {
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
```

## Handling iframes

If website uses iframe that is a cross-origin frame, Cypress will not be able to automate or communicate with this iframe.

```js
// How to make Cypress use iframe
cy.get("#frame").then(($iframe) => {
  const body = $iframe.contents().find("body");
  cy.wrap(body).as("iframe");
});
// How to interact with iframe
```
