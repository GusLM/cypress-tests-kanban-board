describe("Testar adição de tag em uma task", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Deve criar três tags na lista segunda lista e na primeira task usando dado mocado e o comando createTags", () => {
    // // Navega pela hierarquia de elementos até chegar ao container de tags da primeira task da segunda lista
    cy.get(".drop-list")
      .children()
      .eq(1)
      .children()
      .eq(1)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .children()
      .eq(1)
      .children()
      .then(($tags) => {
        const totalAntes = $tags.length;

        // Lê dados mocados das tags
        cy.fixture("tasks/createTags").then((tagData) => {
          // Cria 3 tags usando comando customizado
          cy.createTags(
            tagData.blueTagName,
            tagData.purpleTagName,
            tagData.greenTagName
          );

          // Fecha modal clicando fora
          cy.get("body").click(10, 10);

          // Reconta as tags e valida se aumentou em 3
          cy.get(".drop-list")
            .children()
            .eq(1)
            .children()
            .eq(1)
            .children()
            .eq(0)
            .children()
            .eq(0)
            .children()
            .eq(1)
            .children()
            .should("have.length", totalAntes + 3);
        });
      });
  });
});
