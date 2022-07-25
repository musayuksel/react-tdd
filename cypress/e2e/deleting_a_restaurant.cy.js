describe("DELETING restaurants", () => {
  it("Delete all restaurants from list", () => {
    const restaurantName = "Sushi Place";
    const restaurantName2 = "Sushi Place-2";
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName2);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    //DELETE ALL Restaurant from the list
    cy.get("button.delete-item").click({ multiple: true });
    cy.get('[data-testid="newRestaurantForm"]').should("not.exist");
    cy.get("li.restaurant-list-item").should("have.length", 0);
  });
});
