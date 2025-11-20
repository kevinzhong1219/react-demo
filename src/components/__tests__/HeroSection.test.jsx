import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

describe("HeroSection Component", () => {
  test("renders main title", () => {
    render(<HeroSection />);
    expect(screen.getByText("Welcome to the Demo App")).toBeInTheDocument();
  });

  test("renders subtitle", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Your playground for React testing/i),
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<HeroSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
