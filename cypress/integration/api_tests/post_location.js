import '../../../cypress.json'
import faker from 'faker'
import * as Location from '../requests/requests'

context('Save New Location', () => {
    const Brand_Id = 'd39d8028-b95b-4326-8cbd-6c72f0546d2b'
    const Program_Id = 'a17ac136-126a-465b-bd6a-edaa9fd5c68c'
    const json = require('../../fixtures/location_model.json')

    it('Input a new location', () => {
        json.address = faker.address.streetAddress()
        json.brandId = Brand_Id
        json.city = faker.address.city()
        json.countryCode = 'GBR'
        json.postcode = 'N16 H5Z'
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()
      

        Location.location('api_url', Program_Id, json).then((response) => {
            console.log(response)
            expect(response.status).to.eq(201)
        })
    })

    it('Input a new locayion - Bad Request', () => {
        json.address = faker.address.streetAddress()
        json.brandId = Brand_Id
        json.city = ''
        json.countryCode = 'GBR'
        json.postcode = 'N16 H5Z'
        json.metadata.customKey1 = faker.lorem.words()
        json.metadata.customKey2 = faker.lorem.words()

        Location.location('api_url', Program_Id, json).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})


