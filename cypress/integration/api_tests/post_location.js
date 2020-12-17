import '../../../cypress.json'
import faker from 'faker'
import * as Location from '../requests/requests'

context('Save New Location', () => {
    const Brand_Id = 'd39d8028-b95b-4326-8cbd-6c72f0546d2b'
    const Program_Id = 'a17ac136-126a-465b-bd6a-edaa9fd5c68c'

    it('Input a new location', () => {

        cy.fixture('location_model').then((location) => {
            location.address = faker.address.streetAddress()
            location.brandId = Brand_Id
            location.city = faker.address.city()
            location.countryCode = 'GBR'
            location.postcode = 'N16 H5Z'
            location.metadata.customKey1 = faker.lorem.words()
            location.metadata.customKey2 = faker.lorem.words()

            Location.location('api_url', Program_Id, location).then((response) => {
                expect(response.status).to.eq(201)
            })
        })

    })

    it('Input a new location - Bad Request', () => {

        cy.fixture('location_model').then((location) => {
            location.address = faker.address.streetAddress()
            location.brandId = Brand_Id
            location.city = ''
            location.countryCode = 'GBR'
            location.postcode = 'N16 H5Z'
            location.metadata.customKey1 = faker.lorem.words()
            location.metadata.customKey2 = faker.lorem.words()

            Location.location('api_url', Program_Id, location).then((response) => {
                expect(response.status).to.eq(400)
            })
        })
    })
})


