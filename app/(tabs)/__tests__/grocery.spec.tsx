import { render, userEvent } from "@testing-library/react-native";
import GroceryShoppingList from "../grocery";

describe("Grocery", () => {
  test("Text", async () => {
    const screen = render(<GroceryShoppingList />);

    const user = userEvent.setup();
    const textInput = screen.getByTestId("grocery-input");

    expect(textInput).toBeVisible();

    await user.type(textInput, "Hello World");
    const addGroceryItemButton = screen.getByTestId("add-grocery-button");

    await user.press(addGroceryItemButton);
    const groceryItem = screen.getByTestId("Hello World");
    expect(groceryItem).toBeVisible();
  });
});
