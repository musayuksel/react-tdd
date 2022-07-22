import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewRestaurantForm from "./NewRestaurantForm";
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
      expect(listItems[1].textContent).toEqual("restaurant1");
    });
  });
});
