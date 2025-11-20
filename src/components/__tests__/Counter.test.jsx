/**
 * Counter Component Unit Tests
 *
 * These tests validate:
 * - initial rendering behavior
 * - user interactions (increment clicks)
 * - component behavior with edge-case props
 * - presence & usability of UI elements
 *
 * The Counter component logic:
 *  - displays "Count: X"
 *  - increments count when "Increment" button is clicked
 *  - uses `initial` prop, defaulting to 0 when not provided
 */

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter Component", () => {
  /**
   * Ensures that the component correctly displays the initial count value
   * passed through props.
   */
  test("renders initial count correctly", () => {
    render(<Counter initial={5} />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
  });

  /**
   * Simulates a real user clicking the increment button
   * and verifies that the count increases by 1.
   */
  test("increments count when button is clicked", () => {
    render(<Counter initial={0} />);

    const btn = screen.getByText("Increment");
    fireEvent.click(btn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  /**
   * Ensures correct behavior after multiple sequential clicks.
   * This verifies state updates accumulate correctly.
   */
  test("increments multiple times", () => {
    render(<Counter initial={2} />);
    const btn = screen.getByText("Increment");

    fireEvent.click(btn); // 2 → 3
    fireEvent.click(btn); // 3 → 4
    fireEvent.click(btn); // 4 → 5

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
  });

  /**
   * Validates default behavior when no `initial` prop is given.
   * The component should fall back to 0 instead of crashing or showing undefined.
   */
  test("renders correctly when no initial value is provided", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  /**
   * Ensures the component supports negative values.
   * Useful for robustness and to confirm no unexpected numeric assumptions.
   */
  test("works with negative initial values", () => {
    render(<Counter initial={-3} />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -3");
  });

  /**
   * Ensures that the increment button:
   * - is rendered in the DOM
   * - is interactive (not disabled)
   *
   * This covers accessibility and usability.
   */
  test("button is visible and interactive", () => {
    render(<Counter initial={1} />);
    const btn = screen.getByRole("button", { name: "Increment" });
    expect(btn).toBeEnabled();
  });
});
