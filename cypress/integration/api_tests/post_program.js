import '../../../cypress.json'
import faker from 'faker'
import * as Program from '../requests/requests'

context('Save New program', () => {
    const json = require('../../fixtures/program_model.json')

    it('Input a new program', () => {
        json.name = faker.lorem.words()
        json.icon = ':avocado:'
        json.iconBackground = '#BADA55'
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()

        Program.program('api_url', json).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Input a new program - Bad Request', () => {
        json.name = faker.lorem.words()
        json.icon = ''
        json.iconBackground = '#BADA55'
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()

        Program.program('api_url', json).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})


