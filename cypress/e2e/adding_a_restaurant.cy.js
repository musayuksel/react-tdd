describe("adding a restaurant", () => {
  it("display the restaurant in the list", () => {
    const restaurantName = "Sushi Place";
    cy.visit("http://localhost:3000");
    cy.get('[data-test="addRestaurantButton"]').click();
    cy.get('[data-test="newRestaurantName"]').type(restaurantName);
    cy.get('[data-test="saveNewRestaurantButton"]').click();
    cy.contains(restaurantName);
  });
});
