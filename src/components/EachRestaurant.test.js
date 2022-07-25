import { render } from "@testing-library/react";
import EachRestaurant from "./EachRestaurant";
import RestaurantList from "./RestaurantList";
describe("<EachRestaurant />", () => {
  describe("Should add restaurant in the list", () => {
    it("should show the restaurant on the list", async () => {
      const { container, getAllByRole } = render(
        <EachRestaurant restaurant={"Sushi restaurant"} />
      );
      const listItemsContents = getAllByRole("listitem");
      expect(
        listItemsContents[0].textContent.includes("Sushi restaurant")
      ).toBe(true);
      //   const listItems = container.getElementsByClassName(
      //     "restaurant-list-item"
      //   );
      //   expect(listItems.length).toBe(1);
    });
  });
});
