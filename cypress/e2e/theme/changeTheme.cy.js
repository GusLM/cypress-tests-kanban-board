describe("", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/"); // Visita a página inicial antes de cada teste
  });
  it("Deve alterar o tema e mudar a cor de fundo", () => {
    // Captura cor antes
    cy.get("div")
      .eq(0)
      .children()
      .eq(1)
      .invoke("css", "background-color")
      .then((corInicial) => {
        cy.get(".react-switch-bg").click();
        // captura cor após o clique
        cy.get("div")
          .eq(0)
          .children()
          .eq(1)
          .invoke("css", "background-color")
          .should((corFinal) => {
            // compara cor final com cor incial
            expect(corFinal).not.to.eq(corInicial);
          });
      });
  });
});
