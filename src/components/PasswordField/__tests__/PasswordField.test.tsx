import { render, fireEvent } from "@testing-library/react";
import { PasswordField } from "../PasswordField";

describe("PasswordField", () => {
  test("renders a password field with a toggle button", () => {
    const { getByLabelText, getByRole } = render(<PasswordField />);
    
    // find the password input field by its label
    const passwordInput = getByLabelText("Password");

    // verify that the input is of type "password"
    expect(passwordInput.type).toBe("password");

    // find the toggle button by its aria-label
    const toggleButton = getByRole("button", { name: "Show password" });

    // click the toggle button to show the password
    fireEvent.click(toggleButton);

    // verify that the input is now of type "text"
    expect(passwordInput.type).toBe("text");
  });
});
