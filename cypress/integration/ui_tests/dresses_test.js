import '../../../cypress.json'
import { BuyDressPage } from '../pages/page'

describe('Buying Some dresses', () => {
    const page = new BuyDressPage()

    beforeEach('', () => {
        cy.visit('/index.php')
    })

    it('Buying two diferent dresses', () => {   
        const price = { firstProduct: '$26.00', secondProduct: '$50.99', totalProduct: '$78.99'}

        page.buyDifferentDress()     
        page.validadePriceDifferentDress(price) 
    })

    it('Buying two same dresses', () => {
        const price = { unitPrice: '$16.40', totalProduct: '$32.80', total: '$34.80'}

        page.buySameDress()     
        page.validadePriceSameDress(price) 
    })
}) 