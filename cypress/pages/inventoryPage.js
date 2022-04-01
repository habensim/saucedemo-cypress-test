class inventoryPage {
    visitInventoryPage() {
        cy.url().should("eq", Cypress.config().baseUrl + "/inventory.html");
    }
    btnAddToCart() {
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
    }
    btnCart() {
        cy.get('[id=shopping_cart_container]').click();
    }
    visitCartPage() {
        cy.url().should("eq", Cypress.config().baseUrl + "/cart.html");
    }
    checkOut() {
        cy.get('#checkout').click();
    }
}

export default new inventoryPage();