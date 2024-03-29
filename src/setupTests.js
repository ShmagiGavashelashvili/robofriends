// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from "./store/store";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render, mockStore };
