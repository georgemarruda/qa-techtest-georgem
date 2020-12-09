

export class BuyDressPage {
    navigate() {
        cy.visit('/index.php')
    }

    buyDifferentDress() {
        cy.get('.ajax_cart_no_product').should('include.text', 'empty')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.heading-counter').should('include.text', 'There are 5 products')
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()
    }

    buySameDress() {
        cy.get('.ajax_cart_no_product').should('include.text', 'empty')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.last-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').click()
        cy.get('#quantity_wanted').clear().type('2')
        cy.get('.exclusive > span').click()
        cy.get('.button-medium > span').click()
    }

    validadePriceDifferentDress(price) {
        cy.get('#total_product_price_3_13_0').should('include.text', price.firstProduct)
        cy.get('#total_product_price_4_16_0').should('include.text', price.secondProduct)
        cy.get('#total_price').should('include.text', price.totalProduct)
    }

    validadePriceSameDress(price) {
        cy.get('#product_price_7_34_0 > .price').should('include.text', price.unitPrice)
        cy.get('#total_product_price_7_34_0').should('include.text', price.totalProduct)
        cy.get('#total_price').should('include.text', price.total)
    }

}