import { render, screen } from "@testing-library/react";
import App from "./App";

//Test case used for ensure that the learn react link is rendered in the App component
test("renders learn react link", () => {
  //Render the App component
  render(<App />);
  //Use screen.getByText to find an element with the text learn react
  const linkElement = screen.getByText(/learn react/i);
  //Check that the found element is in the document.
  expect(linkElement).toBeInTheDocument();
});
