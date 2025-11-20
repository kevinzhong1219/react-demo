import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Page", () => {
  test("renders features section", () => {
    render(<Home />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText(/Reusable Components/i)).toBeInTheDocument();
  });

  test("renders counter component", () => {
    render(<Home />);
    expect(screen.getByTestId("count-value")).toBeInTheDocument();
  });

  test("renders footer", () => {
    render(<Home />);
    expect(screen.getByText(/© 2025 My Demo Website/)).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
