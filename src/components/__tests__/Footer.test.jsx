import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText("© 2025 My Demo Website")).toBeInTheDocument();
  });

  test("footer exists in the document", () => {
    render(<Footer />);
    expect(screen.getByText(/My Demo Website/i)).toBeTruthy();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
