import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders site title", () => {
    render(<Header />);
    expect(screen.getByText("My Demo Website")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
