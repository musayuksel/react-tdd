import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewRestaurantForm from "./NewRestaurantForm";
describe("<NewRestaurantForm />", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", async () => {
      const saveHandler = jest.fn().mockName("saveHandler");
      render(<NewRestaurantForm saveHandler={saveHandler} />);
      await userEvent.type(
        screen.getByTestId("newRestaurantName"),
        "Sushi Place2"
      );
      userEvent.click(screen.getByTestId("saveNewRestaurantButton"));
      expect(saveHandler).toHaveBeenCalledWith("Sushi Place2");
    });
  });
});
