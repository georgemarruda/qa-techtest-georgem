import '../../../cypress.json'
import faker from 'faker'
import * as Brand from '../requests/requests'

context('Save New Brand', () => {

    //const json = require('../../fixtures/brand_model')

    it('Input a new brand', () => {
        cy.fixture('brand_model').then((brand) => {
            brand.name = faker.lorem.words()
            brand.logoURL = 'https://brand.com/brandlogo1.png'
            brand.metadata.customKey1 = faker.lorem.words()
            brand.metadata.customKey2 = faker.lorem.words()

            Brand.brand('api_url', brand).then((response) => {
                expect(response.status).to.eq(201)
            })
        })
    })

    it('Input a new brand', () => {
        cy.fixture('brand_model').then((brand) => {
            brand.name = faker.lorem.words()
            brand.logoURL = ''
            brand.metadata.customKey1 = faker.lorem.words()
            brand.metadata.customKey2 = faker.lorem.words()

            Brand.brand('api_url', brand).then((response) => {
                expect(response.status).to.eq(400)
            })
        })
    })
})