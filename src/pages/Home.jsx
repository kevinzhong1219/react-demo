import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter initial={10} />
    </div>
  );
}
