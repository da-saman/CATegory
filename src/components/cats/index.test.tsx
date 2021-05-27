import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { initialState } from "../../store/reducers";
import { MemoryRouter } from "react-router";
import Cats from "./index";
import { fetchCatImages } from "../../store/actions";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/cats/2"]}>
          <Cats />
        </MemoryRouter>
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should dispatch an action on mount", () => {
    renderer.act(() => {
      component.root.findByType("button");
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith([fetchCatImages(2, false),fetchCatImages(2, true)]);
  });
});
