import { render, screen } from "@testing-library/react";
import Viewers from "./Viewers";

describe("<Viewers />", () => {
  it("Should render same text passed into header element", () => {
    render(<Viewers viewer="Musa" />);
    const viewerName = screen.getByRole("heading", { name: "Hello Musa!!!" }); //if there are 2 or more element, look for text include {name:}
    expect(viewerName).toBeInTheDocument();
  });
  // GET BY TEST ID **********************
  it("Should render same text passed into header element", () => {
    render(<Viewers viewer="Musa" />);
    const viewerName = screen.getByTestId("viewerName").textContent;
    expect(viewerName).toEqual("Hello Musa!!!");
  });
  // FIND BY ******ASYNC
  it("Should render same text passed into header element", async () => {
    render(<Viewers viewer="Musa" />);
    const viewerName = await screen.findByText("Hello Musa!!!"); //if there are 2 or more element, look for text include {name:}
    expect(viewerName).toBeInTheDocument();
  });
  // QUERY BY
  it("Should render same text passed into header element", () => {
    render(<Viewers viewer="Musa" />);
    const viewerName = screen.queryByText("MIKE"); //if there are 2 or more element, look for text include {name:}
    expect(viewerName).not.toBeInTheDocument();
  });
  // GET ALL BY ROLE
  it("Should render same text passed into header element", () => {
    render(<Viewers viewer="Musa" />);
    const viewerNames = screen.getAllByRole("heading"); //if there are 2 or more element, look for text include {name:}
    expect(viewerNames.length).toBe(1);
  });
});
