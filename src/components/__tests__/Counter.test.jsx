import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("renders initial count", () => {
  render(<Counter initial={5} />);
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 5");
});

test("increments count when button is clicked", () => {
  render(<Counter initial={0} />);

  const btn = screen.getByText("Increment");
  fireEvent.click(btn);

  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
});
