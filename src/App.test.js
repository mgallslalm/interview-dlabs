/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Sidebar from "../src/components/Sidebar";

describe("Sidebar", () => {
  it("renders Sidebar component", () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
});
