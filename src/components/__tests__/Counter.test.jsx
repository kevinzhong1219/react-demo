import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter Component", () => {
  test("renders initial count correctly", () => {
    render(<Counter initial={5} />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
  });

  test("increments count when button is clicked", () => {
    render(<Counter initial={0} />);
    const btn = screen.getByText("Increment");
    fireEvent.click(btn);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  test("increments multiple times", () => {
    render(<Counter initial={2} />);
    const btn = screen.getByText("Increment");

    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
  });

  test("renders correctly when no initial value is provided", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  test("works with negative initial values", () => {
    render(<Counter initial={-3} />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -3");
  });

  test("button is visible and interactive", () => {
    render(<Counter initial={1} />);
    const btn = screen.getByRole("button", { name: "Increment" });
    expect(btn).toBeEnabled();
  });
});
