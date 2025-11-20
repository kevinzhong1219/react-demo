/**
 * @file Home.int.test.js (integration test)
 * @description
 * Integration tests for the <Home /> page component.
 *
 * These tests validate that the Home page correctly renders
 * its child components and sections working together:
 *  - Features section
 *  - Counter component
 *  - Footer
 *  - Snapshot regression
 *
 * The goal is to ensure end-to-end page rendering behaves as expected,
 * not just individual components in isolation.
 */

import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Page", () => {
  /**
   * Test 1: Verify the Features section renders properly.
   *
   * Purpose:
   * Ensures the page includes the Features header and at least one
   * feature item. This confirms that <FeatureList /> is mounted and
   * integrated correctly inside the Home page.
   */
  test("renders features section", () => {
    render(<Home />);

    // Features title
    expect(screen.getByText("Features")).toBeInTheDocument();

    // At least one feature text from FeatureList
    expect(screen.getByText(/Reusable Components/i)).toBeInTheDocument();
  });

  /**
   * Test 2: Ensure the Counter component is rendered.
   *
   * Purpose:
   * Tests integration between Home page and <Counter /> component.
   * `getByTestId("count-value")` comes from Counter, so this confirms
   * that the component is mounted correctly and visible in the DOM.
   */
  test("renders counter component", () => {
    render(<Home />);
    expect(screen.getByTestId("count-value")).toBeInTheDocument();
  });

  /**
   * Test 3: Verify that the footer is included on the page.
   *
   * Purpose:
   * Checks that the global page layout is correct and the footer
   * content remains consistent. This is useful when updating layouts
   * or global UI structure.
   */
  test("renders footer", () => {
    render(<Home />);
    expect(screen.getByText(/© 2025 My Demo Website/)).toBeInTheDocument();
  });
});
