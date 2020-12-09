import '../../../cypress.json'
import faker from 'faker'
import * as Brand from '../requests/requests'

context('Save New Brand', () => {
    const json = require('../../fixtures/brand_model')

    it('Input a new brand', () => {
        json.name = faker.lorem.words()
        json.logoURL = 'https://brand.com/brandlogo1.png'
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()

        Brand.brand('api_url', json).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Input a new brand - Bad Request', () => {
        json.name = faker.lorem.words()
        json.logoURL = ''
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()

        Brand.brand('api_url', json).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})


