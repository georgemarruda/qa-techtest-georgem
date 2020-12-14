

export class BuyDressPage {
    navigate() {
        cy.visit('/index.php')
    }

    buyDifferentDress(product) {
        cy.get('#search_query_top').clear().type(product)
        cy.contains(product).trigger('mouseouver')
        cy.contains(product)
            .parent()
            .siblings('div.button-container')
            .children('a')
            .first()
            .click()
        cy.get(".button-container a[href$='controller=order']").click()
    }

    continueShopping() {
        cy.get('.button-exclusive').click()
    }

    buySameDress(product) {
        cy.get('#search_query_top').clear().type(product)
        cy.contains(product).trigger('mouseouver')
        cy.contains(product).click()
        cy.get('#quantity_wanted').clear().type('2')
        cy.get('.exclusive > span').click()
        cy.get('.button-medium > span').click()
    }

    validadePriceDifferentDress(price) {
        cy.get('#total_product_price_3_13_0').should('include.text', price.firstProduct)
        cy.get('#total_product_price_7_34_0').should('include.text', price.secondProduct)
        cy.get('#total_price').should('include.text', price.totalProduct)
    }

    validadePriceSameDress(price) {
        cy.get('#product_price_3_13_0 > .price').should('include.text', price.unitPrice)
        cy.get('#total_product_price_3_13_0').should('include.text', price.totalProduct)
        cy.get('#total_price').should('include.text', price.total)
    }

}
