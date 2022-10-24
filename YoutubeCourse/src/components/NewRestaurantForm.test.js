import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewRestaurantForm from "./NewRestaurantForm";
describe("<NewRestaurantForm />", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", async () => {
      const saveHandler = jest.fn().mockName("saveHandler");
      const setIsShowNewRestaurantForm = jest
        .fn()
        .mockName("setIsShowNewRestaurantForm");
      render(<NewRestaurantForm saveHandler={saveHandler} />);
      userEvent.click(screen.getByTestId("addRestaurantButton"));
      await userEvent.type(
        screen.getByTestId("newRestaurantName"),
        "Sushi Place2"
      );
      userEvent.click(screen.getByTestId("saveNewRestaurantButton"));
      expect(saveHandler).toHaveBeenCalledWith("Sushi Place2");
      // expect(true).toBe(true);
    });
  });
});
