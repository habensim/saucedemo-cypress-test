class checkOutInformation {
    firstName(firstname) {
        cy.get('[id=first-name]')
            .clear()
            .type(firstname);
        return this;
    }
    lastName(lastname) {
        cy.get('[id=last-name]')
            .clear()
            .type(lastname);
        return this;
    }
    postalCode(postalcode) {
        cy.get('[id=postal-code]')
            .clear()
            .type(postalcode);
        return this;
    }
    btnContinue() {
        cy.get('#continue').click();
    }
    checkOutStepTwo() {
        cy.url().should("eq", Cypress.config().baseUrl + "/checkout-step-two.html");
    }

    finishButton() {
        cy.get('#finish').click();
    }
}

export default new checkOutInformation();