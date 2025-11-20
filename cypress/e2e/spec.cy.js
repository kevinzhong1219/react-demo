describe("Home Page – Full E2E Test Suite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // -------------------------------------------------------------
  // Header Tests
  // -------------------------------------------------------------
  it("loads header and navigation links", () => {
    cy.contains("My Demo Website").should("exist");

    cy.contains("Home").should("exist");
    cy.contains("About").should("exist");
    cy.contains("Contact").should("exist");
  });

  // -------------------------------------------------------------
  // Hero Section Tests
  // -------------------------------------------------------------
  it("renders hero section with title and subtitle", () => {
    cy.contains("Welcome to the Demo App").should("be.visible");
    cy.contains("Your playground for React testing").should("exist");
  });

  // -------------------------------------------------------------
  // Feature List Tests
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // Counter Tests
  // -------------------------------------------------------------
  it("checks counter initial value and increment behavior", () => {
    // initial count
    cy.get("[data-testid='count-value']").should("contain.text", "Count: 5");

    // click increment
    cy.contains("Increment").click();

    // final count
    cy.get("[data-testid='count-value']").should("contain.text", "Count: 6");
  });

  // -------------------------------------------------------------
  // Footer Tests
  // -------------------------------------------------------------
  it("renders footer correctly", () => {
    cy.contains("© 2025 My Demo Website").should("exist");
  });

  // -------------------------------------------------------------
  // Structural Test (Smoke Test)
  // -------------------------------------------------------------
  it("page structure exists in correct order", () => {
    cy.get("header").should("exist");
    cy.get("section").should("have.length.at.least", 3);
    cy.get("footer").should("exist");
  });

  // -------------------------------------------------------------
  // Navigation Test (No real routing but checks clickability)
  // -------------------------------------------------------------
  it("simulates nav clicking (no routing yet)", () => {
    cy.contains("About").click({ force: true });
    cy.contains("Contact").click({ force: true });

    // Header still visible → nav links work visually
    cy.contains("My Demo Website").should("exist");
  });

  // -------------------------------------------------------------
  // Optional: Accessibility sanity check
  // -------------------------------------------------------------
  it("ensures important elements have semantic structure", () => {
    cy.get("h1").should("exist");
    cy.get("h2").should("exist");
    cy.get("button").should("exist");
  });
});
