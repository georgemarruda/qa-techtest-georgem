/// <reference types="cypress" />

let key = 'sk_test_50ea90b6-2a3b-4a56-814d-1bc592ba4d63'

export function brand(enviroment, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/brands',
        headers: {
            'Content-Type': 'application/json',
            'fidel-key': key
          },
        failOnStatusCode: false,
        body: corpo_request
    })
}

export function program(enviroment, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/programs',
        headers: {
            'Content-Type': 'application/json',
            'fidel-key': key
          },
        failOnStatusCode: false,
        body: corpo_request
    })
}

export function location(enviroment, programId, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/programs/'+ programId +'/locations',
        headers: {
            'Content-Type': 'application/json',
            'fidel-key': key
          },
        failOnStatusCode: false,
        body: corpo_request
    })
}


