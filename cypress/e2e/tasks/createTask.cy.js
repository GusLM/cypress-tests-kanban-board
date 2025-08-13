describe("Testar criação de task", () => {
  beforeEach(() => {
    cy.visit("/"); // Visita a página inicial antes de cada teste
  });

  it("Deve criar uma task usando dado mocado e o comando createTask", () => {
    // Carrega os dados de teste do arquivo fixtures/tasks/createTask.json
    cy.fixture("tasks/createTask").then((taskData) => {
      // Usa o comando customizado para criar a task
      cy.createTask(taskData.taskName);

      // Valida se a task criada está visível na tela
      cy.contains(taskData.taskName).should("exist");
    });
  });
});
