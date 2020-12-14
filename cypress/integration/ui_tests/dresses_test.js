import '../../../cypress.json'
import { BuyDressPage } from '../pages/page'

describe('Buying Some dresses', () => {
    const page = new BuyDressPage()

    beforeEach('', () => {
        cy.visit('/index.php?id_category=8&controller=category')
    })

    it('Buying two diferent dresses', () => {   
        const price = { firstProduct: '$26.00', secondProduct: '$16.40', totalProduct: '$44.40'}

        page.buyDifferentDress('Printed Dress') 
        page.continueShopping() 
        page.buyDifferentDress('Printed Chiffon Dress')   
        page.validadePriceDifferentDress(price) 
    })

    it('Buying two same dresses', () => {
        const price = { unitPrice: '$26.00', totalProduct: '$52.00', total: '$54.00'}

        page.buySameDress('Printed Dress')     
        page.validadePriceSameDress(price) 
    })
}) 
