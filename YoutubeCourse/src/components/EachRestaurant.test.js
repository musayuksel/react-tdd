import { render } from "@testing-library/react";
import EachRestaurant from "./EachRestaurant";
import userEvent from "@testing-library/user-event";
describe("<EachRestaurant />", () => {
  describe("Should add restaurant in the list", () => {
    // it("should NOT ADD empty restaurant to the list", () => {
    //   const { container } = render(<EachRestaurant restaurant={""} />);

    //   const listItems = container.getElementsByClassName(
    //     "restaurant-list-item"
    //   );
    //   expect(listItems.length).toBe(18);
    // });
    it("should show the restaurant on the list", async () => {
      const { container, getAllByRole } = render(
        <EachRestaurant restaurant={"Sushi restaurant"} />
      );
      const listItemsContents = getAllByRole("listitem");
      expect(
        listItemsContents[0].textContent.includes("Sushi restaurant")
      ).toBe(true);
    });
  });

  describe("Should DELETE restaurant with delete click event", () => {
    it("should delete a restaurant", () => {
      const { container } = render(
        <EachRestaurant restaurant={"Sushi restaurant -2"} />
      );
      const deleteButton = container.getElementsByClassName("delete-item");
      userEvent.click(deleteButton[0]);

      const listItems = container.getElementsByClassName(
        "restaurant-list-item"
      );
      expect(listItems.length).toBe(18);
    });
  });
});
