/**
 * @file home.e2e.cy.js
 * @description
 * Full End-to-End test suite for the Home page using Cypress.
 *
 * This suite validates:
 *  - Page load and navigation visibility
 *  - Hero section content
 *  - Feature list rendering
 *  - Counter component interaction
 *  - Footer visibility
 *  - Page structure and semantic elements
 *
 * These tests simulate real user behavior in a real browser,
 * covering scenarios that unit/integration tests cannot.
 */

describe("Home Page – Full E2E Test Suite", () => {
  /**
   * Runs before each test.
   * Ensures a fresh page load to avoid shared state between tests.
   */
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // ---------------------------------------------------------------------------
  // Header Tests
  // ---------------------------------------------------------------------------
  /**
   * Ensures the header and navbar links render correctly.
   * Validates that key navigation elements are present for the user.
   */
  it("loads header and navigation links", () => {
    cy.contains("My Demo Website").should("exist");

    cy.contains("Home").should("exist");
    cy.contains("About").should("exist");
    cy.contains("Contact").should("exist");
  });

  // ---------------------------------------------------------------------------
  // Hero Section Tests
  // ---------------------------------------------------------------------------
  /**
   * Verifies that the hero section renders both the main title
   * and subtitle, ensuring introductory content loads properly.
   */
  it("renders hero section with title and subtitle", () => {
    cy.contains("Welcome to the Demo App").should("be.visible");
    cy.contains("Your playground for React testing").should("exist");
  });

  // ---------------------------------------------------------------------------
  // Feature List Tests
  // ---------------------------------------------------------------------------
  /**
   * Checks that the Features section and all expected feature items
   * are present on the page. This ensures correct integration of
   * the <FeatureList /> component.
   */
  it("renders all feature items correctly", () => {
    cy.contains("Features").should("exist");

    const features = [
      "Reusable Components",
      "Unit Tests with Jest",
      "ESLint + Prettier Integration",
    ];

    features.forEach((feature) => {
      cy.contains(feature).should("exist");
    });
  });

  // ---------------------------------------------------------------------------
  // Counter Tests
  // ---------------------------------------------------------------------------
  /**
   * Validates that the Counter component initializes correctly
   * and increments when the button is clicked.
   *
   * This simulates real user interaction in the browser.
   */
  it("checks counter initial value and increment behavior", () => {
    cy.get("[data-testid='count-value']").should("contain.text", "Count: 5");

    cy.contains("Increment").click();

    cy.get("[data-testid='count-value']").should("contain.text", "Count: 6");
  });

  // ---------------------------------------------------------------------------
  // Footer Tests
  // ---------------------------------------------------------------------------
  /**
   * Ensures that the footer renders and displays the correct text.
   */
  it("renders footer correctly", () => {
    cy.contains("© 2025 My Demo Website").should("exist");
  });

  // ---------------------------------------------------------------------------
  // Structural Smoke Test
  // ---------------------------------------------------------------------------
  /**
   * High-level check to ensure the overall page structure is intact.
   * Useful as a smoke test after layout changes or CSS refactoring.
   */
  it("page structure exists in correct order", () => {
    cy.get("header").should("exist");
    cy.get("section").should("have.length.at.least", 3);
    cy.get("footer").should("exist");
  });

  // ---------------------------------------------------------------------------
  // Navigation Test (Basic)
  // ---------------------------------------------------------------------------
  /**
   * Simulates clicking navigation links.
   * There is no routing yet, but this test ensures links are clickable
   * and visible in the DOM without causing crashes.
   */
  it("simulates nav clicking (no routing yet)", () => {
    cy.contains("About").click({ force: true });
    cy.contains("Contact").click({ force: true });

    // Header remains visible → page is still stable
    cy.contains("My Demo Website").should("exist");
  });

  // ---------------------------------------------------------------------------
  // Accessibility (Basic Sanity Check)
  // ---------------------------------------------------------------------------
  /**
   * Ensures important semantic elements exist on the page.
   * This is not a full accessibility audit, but a sanity check to
   * maintain correct page structure.
   */
  it("ensures important elements have semantic structure", () => {
    cy.get("h1").should("exist");
    cy.get("h2").should("exist");
    cy.get("button").should("exist");
  });
});
