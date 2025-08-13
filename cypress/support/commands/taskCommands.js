// Comando personalizado para criar uma nova task com nome fornecido
Cypress.Commands.add("createTask", (taskName) => {
  cy.get(".drop-list")
    .children()
    .eq(2)
    .within(() => {
      cy.contains("Adicionar Tarefa").click();

      cy.get('input[type="text"]').type(taskName);

      cy.get("div").find('button[type="submit"]').click();
    });
});

// Comando personalizado para deletar uma task
Cypress.Commands.add("deleteFirstTaskFromFirstList", () => {
  // Captura todas as tasks da primeira lista para contar antes
  cy.get(".drop-list")
    .children()
    .eq(0) // primeira lista
    .children()
    .eq(1)
    .children()
    .then(($tasksAntes) => {
      const totalAntes = $tasksAntes.length;

      // Seleciona a primeira task
      cy.get(".drop-list")
        .children()
        .eq(0)
        .children()
        .eq(1)
        .children()
        .eq(0)
        .as("primeiraTask");

      // Simula hover para mostrar o botão de deletar
      cy.get("@primeiraTask").realHover();

      // Clica no botão trash que aparece
      cy.get("@primeiraTask").find(".trash").click({ force: true });

      // Verifica se o total de tasks diminuiu em 1
      cy.get(".drop-list")
        .children()
        .eq(0)
        .children()
        .eq(1)
        .children()
        .should("have.length", totalAntes - 1);
    });
});

// Comando personalizado para editar uma task com nome fornecido
Cypress.Commands.add("editTaskName", (taskName) => {
  // Seleciona a primeira task da segunda lista
  cy.get(".drop-list")
    .children()
    .eq(1)
    .children()
    .eq(1)
    .children()
    .eq(0)
    .click();

  // Clica no texto que abre o formulário de criação de lista
  cy.contains("Wireframe das telas").click();

  cy.get("form").within(() => {
    // Dentro do formulário, digita o nome da lista e clica no botão de submit
    cy.get('input[type="text"]').type(taskName);
    cy.get("div").find('button[type="submit"]').click();
  });
});

// Comando personalizado para criar tags com nomes fornecidos
Cypress.Commands.add(
  "createTags",
  (blueTagName, purpleTagName, greenTagName) => {
    // Seleciona a primeira task da segunda lista
    cy.get(".drop-list")
      .children()
      .eq(1)
      .children()
      .eq(1)
      .children()
      .eq(0)
      .click();

    // Seleciona a cor azul
    cy.get("#0Color").click();

    // Clica no texto que abre o formulário de criação de lista
    cy.contains("Adicionar nova Tag").click();

    cy.get("form").within(() => {
      // Dentro do formulário, digita o nome da lista e clica no botão de submit
      cy.get('input[type="text"]').type(blueTagName);
      cy.get("div").find('button[type="submit"]').click();
    });

    // Seleciona a cor roxa
    cy.get("#1Color").click();

    // Clica no texto que abre o formulário de criação de lista
    cy.contains("Adicionar nova Tag").click();

    cy.get("form").within(() => {
      // Dentro do formulário, digita o nome da lista e clica no botão de submit
      cy.get('input[type="text"]').type(purpleTagName);
      cy.get("div").find('button[type="submit"]').click();
    });

    // Seleciona a cor verde
    cy.get("#2Color").click();

    // Clica no texto que abre o formulário de criação de lista
    cy.contains("Adicionar nova Tag").click();

    cy.get("form").within(() => {
      // Dentro do formulário, digita o nome da lista e clica no botão de submit
      cy.get('input[type="text"]').type(greenTagName);
      cy.get("div").find('button[type="submit"]').click();
    });
  }
);
