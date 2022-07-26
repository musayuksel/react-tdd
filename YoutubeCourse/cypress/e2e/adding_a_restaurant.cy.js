describe("adding a restaurant", () => {
  it("display the restaurant in the list", () => {
    const restaurantName = "Sushi Place";
    const restaurantName2 = "Sushi Place-2";
    cy.visit("http://localhost:3000");
    //confirm newRestaurantForm is not displayed
    cy.get('[data-testid="newRestaurantForm"]').should("not.exist");
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    //confirm newRestaurantForm is not displayed
    cy.get('[data-testid="newRestaurantForm"]').should("not.exist");
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName2);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    //confirm newRestaurantForm is not displayed
    cy.get('[data-testid="newRestaurantForm"]').should("not.exist");
    cy.contains(restaurantName);
  });
});
