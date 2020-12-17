import '../../../cypress.json'
import faker from 'faker'
import * as Program from '../requests/requests'

context('Save New program', () => {
    const json = require('../../fixtures/program_model.json')

    it('Input a new program', () => {

        cy.fixture('program_model').then((program) => {
            program.name = faker.lorem.words()
            program.icon = ':avocado:'
            program.iconBackground = '#BADA55'
            program.metadata.customKey1 = faker.lorem.words()
            program.metadata.customKey2 = faker.lorem.words()

            Program.program('api_url', program).then((response) => {
                expect(response.status).to.eq(201)
            })
        })

    })

    it('Input a new program - Bad Request', () => {

        cy.fixture('program_model').then((program) => {
            program.name = faker.lorem.words()
            program.icon = ''
            program.iconBackground = '#BADA55'
            program.metadata.customKey1 = faker.lorem.words()
            program.metadata.customKey2 = faker.lorem.words()

            Program.program('api_url', program).then((response) => {
                expect(response.status).to.eq(400)
            })
        })

    })
})


