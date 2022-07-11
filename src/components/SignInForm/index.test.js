import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import { render, screen, fireEvent } from "@testing-library/react";
import SignInForm from "./index";

const rootReducer = combineReducers({
  form: formReducer,
  userData: null,
});

let store;

describe("Redux Form tests", () => {
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  test("should match the snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  test("should show error onClick at login button", () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Wrong password or username, please try again.")
    ).toBeInTheDocument();
  });

  test("should submit form with form data", () => {
    const onSubmit = jest.fn();

    render(
      <Provider store={store}>
        <SignInForm onSubmit={onSubmit} />
      </Provider>
    );

    const usernameField = screen.getByPlaceholderText("Username");
    const passwordField = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameField, { target: { value: "upworkTest" } });
    fireEvent.change(passwordField, { target: { value: "2022" } });

    fireEvent.click(screen.getByRole("button"));

    const expectedFormValue = { username: "upworkTest", password: "2022" };
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual(expectedFormValue);
  });
});
