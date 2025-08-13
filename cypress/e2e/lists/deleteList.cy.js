describe("Testa a deleção de lista", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Deve deletar a primeira lista e verificar se foi removida", () => {
    // Captura todas as listas no container '.drop-list'
    cy.get(".drop-list")
      .children()
      .then(($lists) => {
        const totalAntes = $lists.length;

        // Seleciona a primeira lista usando o seletor de CSS :nth-child(1)
        cy.get(".drop-list > :nth-child(1)").within(() => {
          // Dentro da primeira lista, busca o header
          cy.get(".header").within(() => {
            // Clica no botão de deletar (ícone com classe '.trash')
            cy.get(".trash").click();
          });
        });

        // Verifica se o número de listas diminuiu em 1 após a deleção
        cy.get(".drop-list")
          .children()
          .should("have.length", totalAntes - 1);
      });
  });
});
