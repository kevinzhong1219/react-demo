export default function FeatureList() {
  const features = [
    "✔ Reusable Components",
    "✔ Unit Tests with Jest",
    "✔ ESLint + Prettier Integration",
  ];

  return (
    <section style={{ padding: "24px" }}>
      <h2>Features</h2>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  );
}
