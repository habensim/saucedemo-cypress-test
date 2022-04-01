class loginPage {
    open() {
        cy.visit('/')
    }

    userName(username) {
        cy.get('[id=user-name]')
            .clear()
            .type(username);
        return this;
    }

    passWord(password) {
        cy.get('[id=password]')
            .clear()
            .type(password);
        return this;
    }

    btnLogin() {
        cy.get('#login-button').click();
    }

    visitInventoryPage() {
        cy.url().should('contains', '/inventory.html')
    }
}

export default new loginPage();