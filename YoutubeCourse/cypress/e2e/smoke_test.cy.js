describe("Creating a message", () => {
  it("Find the viewer", () => {
    cy.visit("http://localhost:3000").contains("Hello Musa!!!");

    //   cy.get('[data-testid="messageText"]').type("New message");

    //   cy.get('[data-testid="sendButton"]').click();

    //   cy.get('[data-testid="messageText"]').should("have.value", "");

    //   cy.contains("New message");
  });
});
