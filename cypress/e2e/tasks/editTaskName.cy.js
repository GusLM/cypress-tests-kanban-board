describe("Testa a edição de nome de uma task", () => {
  beforeEach(() => {
    cy.visit("/"); // Abre a página inicial antes de cada teste
  });
  it("Deve editar o nome da primeira task da segunda lista", () => {
    // Carrega dados mockados da fixture
    cy.fixture("tasks/createTask").then((taskData) => {
      // Executa comando customizado para editar o nome da task
      cy.editTaskName(taskData.taskName);

      // Valida se a task editada existe na tela
      cy.contains(taskData.taskName).should("exist");
    });
  });
});
