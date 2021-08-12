/// <reference types = "cypress" />

describe("Create Event", () => {
    it("Step-1", () => {
    //Login to SKO
    cy.visit("stage-mysko.selise.biz")
    cy.get('#mat-input-0').type("ecap@selise.ch")
    cy.get('#mat-input-1').type("1qazZAQ!")
    cy.get('.submit-button').click()
    cy.wait(3000)

    //Go to event page and create an event
    cy.get('.toggle-button-navbar > .mat-button-wrapper > .mat-icon').click()
    cy.get('.nav-link.ng-tns-c32-15 > .collapsable-arrow').click()
    cy.get('.open > .children > :nth-child(1) > .nav-link > .nav-link-title').click()
    cy.wait(3000)
    cy.get('.event-create-button > .mat-button-wrapper').click()
    cy.get('#mat-input-4').type("5th-Aug-Test")
    // cy.get('#mat-select-7 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
    // cy.get('.mat-select-panel > mat-option:nth-child(4)').click()
    // // Select registration start date
    // cy.get('[placeholder="Registration Start Date*"]').click()
    // cy.get('[aria-label="12 August 2021"] > .mat-calendar-body-cell-content').click()
    // // Select registration end date
    // cy.get('[placeholder="Registration End Date*"]').click()
    // cy.get('[aria-label="20 August 2021"] > .mat-calendar-body-cell-content').click()
    // // Select event start date
    // cy.get('[placeholder="Start Date*"]').click()
    // cy.get('[aria-label="21 August 2021"] > .mat-calendar-body-cell-content').click()
    // // Select event end date
    // cy.get('[placeholder="End Date*"]').click()
    // cy.get('[aria-label="30 August 2021"] > .mat-calendar-body-cell-content').click()
    // // Select event start time
    // cy.get('[formcontrolname="EventStartTime"] [placeholder="HH"]').type("7")
    // cy.get('[formcontrolname="EventStartTime"] [placeholder="MM"]').type("0")
    // // Select event end time
    // cy.get('[formcontrolname="EventEndTime"] [placeholder="HH"]').type("9")
    // cy.get('[formcontrolname="EventEndTime"] [placeholder="MM"]').type("0")
    // // Select event host
    // cy.get('[placeholder="Event Host Multiple Choice"]').click()
    // cy.get('.mat-select-panel > mat-option:nth-child(1)').click()
    // cy.get('.cdk-overlay-backdrop').click()
    // Select main language
    cy.get('[aria-label="Language*"]').click()
    cy.get('.mat-select-panel > mat-option:nth-child(3)').click()
    // // Add location
    // cy.get('.active-btn > .mat-button-wrapper > .ng-star-inserted').click()
    // cy.wait(2000)
    // cy.get(':nth-child(3) > [fxlayoutalign="space-between center"] > [fxflex=""]').click()
    // cy.get('.mat-primary > .mat-button-wrapper').click()
    // //Webiner link
    // cy.get('#mat-input-9').type("test.com")


    // Go to 2nd step
    cy.get('#cdk-step-content-0-0 > .mt-48 > [fxlayout="row"] > [matsteppernext=""] > .mat-button-wrapper').click()
    // Upload image
    const YourFilePath = 'campaign.png'
    cy.get('#imageFile').attachFile(YourFilePath)
    cy.get('[aria-label="Save"]').click()
   //Enter description
    cy.get('[title="Rich Text Editor, editor-1"]')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .type("fake@email.com")
    //Enter summary
    cy.get('[title="Rich Text Editor, editor-5"]')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .type("fake@email.com")
    //Select sender email
    // cy.get('[formcontrolname="Email"]').click()
    // cy.get('.mat-select-panel > mat-option:nth-child(2)').click()
    // // Enter receiver email
    // cy.get('#mat-chip-list-input-0').type('bgmkaniz@gmail.com').type('{enter}')
    // Upload image
    // const fileName = '900848.pdf'
//     cy.fixture('900848.pdf').then(fileContent => {
//       cy.get('#fileUpload').attachFile({fileContent, fileName: '900848.pdf', mimeType: 'application/pdf'}, {subjectType: 'input'})
      
//   })
  const filePath = '900848.pdf'
  cy.get('#fileUpload').attachFile(filePath)
  cy.readFile('cypress/fixtures/900848.pdf', { timeout: 6000 })

  /// <reference types="Cypress" />
// import 'cypress-file-upload';
// describe('Example to demonstrate file upload in cypress', function () {
//     debugger
//     before(function () {
//         cy.visit('https://the-internet.herokuapp.com/upload')
//     })

//     it('File Upload using cypress-file-upload npm package', () => {
//         debugger
//         const filepath = 'pdf/FATEMA-TUZ-JOHURA.pdf'
//         cy.get('input[type="file"]').attachFile(filepath)


//         cy.readFile('cypress/fixtures/pdf/FATEMA-TUZ-JOHURA.pdf', { timeout: 6000 }).should('exist')
//     })
// })



    })
})




