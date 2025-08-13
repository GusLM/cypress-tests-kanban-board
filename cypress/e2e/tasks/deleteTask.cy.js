describe("Testar a deleção de task", () => {
  beforeEach(() => {
    cy.visit("/"); // Acessa a página inicial antes de cada teste
  });
  it("Deve deletar a primeira task da primeira lista e verificar se foi realmente deletado", () => {
    // Executa o comando customizado que remove a primeira task da primeira lista
    cy.deleteFirstTaskFromFirstList();
  });
});
