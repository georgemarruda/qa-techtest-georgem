import '../../../cypress.json'
import faker from 'faker'
import * as Brand from '../requests/requests'

context('Save New Brand', () => {
    const conteudoJson = require('../../fixtures/brand_model')

    it('Input a new brand', () => {
        conteudoJson.name = faker.lorem.words()
        conteudoJson.logoURL = 'https://brand.com/brandlogo1.png'
        conteudoJson.metadata.customKey1 = faker.lorem.words()
        conteudoJson.metadata.customKey2 = faker.lorem.words()

        Brand.brand('api_url', conteudoJson).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Input a new brand - Bad Request', () => {
        conteudoJson.name = faker.lorem.words()
        conteudoJson.logoURL = ''
        conteudoJson.metadata.customKey1 = faker.lorem.words()
        conteudoJson.metadata.customKey2 = faker.lorem.words()

        Brand.brand('api_url', conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})


