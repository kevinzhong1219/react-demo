import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureList from "../components/FeatureList";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureList />

      <section style={{ padding: "24px" }}>
        <h2>Try the Counter</h2>
        <Counter initial={5} />
      </section>

      <Footer />
    </div>
  );
}
