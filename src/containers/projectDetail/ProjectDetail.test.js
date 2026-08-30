import React from "react";
import ReactDOM from "react-dom";
import {MemoryRouter, Route} from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import {StyleProvider} from "../../contexts/StyleContext";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });

  window.scrollTo = jest.fn();
});

test("renders project screenshots as clickable preview buttons", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <StyleProvider value={{isDark: false, changeTheme: jest.fn()}}>
      <MemoryRouter initialEntries={["/projects/machina"]}>
        <Route path="/projects/:slug" component={ProjectDetail} />
      </MemoryRouter>
    </StyleProvider>,
    div
  );

  const buttons = div.querySelectorAll("button[aria-label^='Open screenshot']");
  expect(buttons.length).toBeGreaterThan(0);

  ReactDOM.unmountComponentAtNode(div);
});
