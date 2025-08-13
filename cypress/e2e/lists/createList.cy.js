describe("Testar criação de lista", () => {
  beforeEach(() => {
    cy.visit("/"); // Visita a página inicial antes de cada teste
  });

  it("Deve criar uma lista usando dado mocado e o comando createList", () => {
    // Carrega os dados mockados do arquivo 'lists/createList.json'
    cy.fixture("lists/createList").then((listData) => {
      // Executa comando customizado para criar a lista com o nome informado
      cy.createList(listData.listName);

      // Valida se a nova lista foi criada, verificando se existe na tela
      cy.contains(listData.listName).should("exist");
    });
  });
});
