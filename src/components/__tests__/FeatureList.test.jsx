/**
 * @file FeatureList.test.js
 * @description
 * Unit tests for the <FeatureList /> component using React Testing Library.
 * These tests verify:
 *  1. The component renders all expected text items.
 *  2. The component renders exactly three <li> items.
 *  3. The rendered UI matches the snapshot (regression test).
 */

import { render, screen } from "@testing-library/react";
import FeatureList from "../FeatureList";

describe("FeatureList Component", () => {
  /**
   * Test 1: Verify that all feature text labels appear in the DOM.
   *
   * Purpose:
   * Ensures the component correctly displays the expected feature descriptions.
   * This guards against accidental text changes or missing list entries.
   */
  test("renders all feature texts", () => {
    render(<FeatureList />);

    // Assert each text element exists in the document
    expect(screen.getByText(/Reusable Components/i)).toBeInTheDocument();
    expect(screen.getByText(/Unit Tests with Jest/i)).toBeInTheDocument();
    expect(
      screen.getByText(/ESLint \+ Prettier Integration/i),
    ).toBeInTheDocument();
  });

  /**
   * Test 2: Ensure that exactly three <li> items are rendered.
   *
   * Purpose:
   * Checks structural correctness of the component.
   * If someone adds or removes an item, this test will catch it.
   */
  test("renders exactly three list items", () => {
    const { container } = render(<FeatureList />);

    // Query all <li> elements inside the rendered component
    const items = container.querySelectorAll("li");

    expect(items.length).toBe(3);
  });

  /**
   * Test 3: Snapshot test.
   *
   * Purpose:
   * Creates a serialized snapshot of the rendered output.
   * This helps detect unexpected UI changes during refactors.
   */
  test("matches snapshot", () => {
    const { asFragment } = render(<FeatureList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
