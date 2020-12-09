import '../../../cypress.json'
import faker from 'faker'
import * as Program from '../requests/requests'

context('Save New program', () => {
    const conteudoJson = require('../../fixtures/program_model.json')

    it('Input a new program', () => {
        conteudoJson.name = faker.lorem.words()
        conteudoJson.icon = ':avocado:'
        conteudoJson.iconBackground = '#BADA55'
        conteudoJson.metadata.customKey1 = faker.lorem.words()
        conteudoJson.metadata.customKey2 = faker.lorem.words()

        Program.program('api_url', conteudoJson).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Input a new program - Bad Request', () => {
        conteudoJson.name = faker.lorem.words()
        conteudoJson.icon = ''
        conteudoJson.iconBackground = '#BADA55'
        conteudoJson.metadata.customKey1 = faker.lorem.words()
        conteudoJson.metadata.customKey2 = faker.lorem.words()

        Program.program('api_url', conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})


