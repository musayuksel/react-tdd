import { render } from "@testing-library/react";
import RestaurantList from "./RestaurantList";
describe("<RestaurantList />", () => {
  describe("Should show restaurants list", () => {
    it("should show header for empty restaurant list", async () => {
      const restaurants = [];
      const { getAllByRole } = render(
        <RestaurantList restaurants={restaurants} />
      );
      const listItems = getAllByRole("listitem");
      expect(listItems).toHaveLength(1);
    });
    it("should show header and all restaurants list", async () => {
      const restaurants = ["restaurant1", "restaurant2"];
      const { getAllByRole } = render(
        <RestaurantList restaurants={restaurants} />
      );
      const listItems = getAllByRole("listitem");
      expect(listItems[1].textContent.includes("restaurant1")).toBe(true);
    });
    it("should NOT show empty restaurants in the list", async () => {
      const restaurants = ["restaurant1", "restaurant2", ""];
      const { getAllByRole } = render(
        <RestaurantList restaurants={restaurants} />
      );
      const listItems = getAllByRole("listitem");
      expect(listItems).toHaveLength(3); //header is always there
    });
  });
});
