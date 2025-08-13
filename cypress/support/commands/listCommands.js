// Comando personalizado para criar uma nova lista com o nome fornecido
Cypress.Commands.add('createList', (listName) => {
    cy.contains('Adicionar outra lista').click();

    cy.get('form').within(() => {
        // Clica no texto que abre o formulário de criação de lista
        cy.get('input[type="text"]').type(listName);

        // Dentro do formulário, digita o nome da lista e clica no botão de submit
        cy.get('div').find('button[type="submit"]').click();
    })
});


