import { render, screen } from "@testing-library/react";
import FeatureList from "../FeatureList";

describe("FeatureList Component", () => {
  test("renders all feature texts", () => {
    render(<FeatureList />);
    expect(screen.getByText(/Reusable Components/i)).toBeInTheDocument();
    expect(screen.getByText(/Unit Tests with Jest/i)).toBeInTheDocument();
    expect(
      screen.getByText(/ESLint \+ Prettier Integration/i),
    ).toBeInTheDocument();
  });

  test("renders exactly three list items", () => {
    const { container } = render(<FeatureList />);
    const items = container.querySelectorAll("li");
    expect(items.length).toBe(3);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<FeatureList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
