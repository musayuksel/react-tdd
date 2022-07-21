describe("adding a restaurant", () => {
  it("display the restaurant in the list", () => {
    const restaurantName = "Sushi Place";
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    cy.contains(restaurantName);
  });
});
