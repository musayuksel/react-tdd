import { render, screen } from "@testing-library/react";
import Viewers from "./Viewers";

describe("<Viewers />", () => {
  it("Find viewers on the screen", async () => {
    render(<Viewers />);
    const viewerName = screen.getByTestId("viewerName").value;
    expect(viewerName).toEqual();
  });
});
