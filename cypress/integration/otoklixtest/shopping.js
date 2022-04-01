/// <reference types="cypress" />

import checkOutInformation from "../../pages/checkOutInformation";
import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage";

describe('Shopping saucelabs Testing', () => {
    let sampleData;

    before(async () => {
        sampleData = await cy.fixture("sampleData.json");
    });
    it('Visit login and Order', () => {
        loginPage.open();
        loginPage.userName(sampleData.userName);
        loginPage.passWord(sampleData.password);
        loginPage.btnLogin();
        inventoryPage.visitInventoryPage();
        inventoryPage.btnAddToCart();
        inventoryPage.btnCart();
        inventoryPage.visitCartPage();
        inventoryPage.checkOut();
        checkOutInformation.firstName(sampleData.firstName);
        checkOutInformation.lastName(sampleData.lastName);
        checkOutInformation.postalCode(sampleData.postalCode);
        checkOutInformation.btnContinue();
        checkOutInformation.checkOutStepTwo();

        cy.get('.inventory_item_name').should('have.text', "Sauce Labs Bike Light");
        cy.get('.cart_quantity').should('have.text', '1');
        cy.get('.inventory_item_price').should('have.text', '$9.99');

        checkOutInformation.finishButton();

        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    });

});
