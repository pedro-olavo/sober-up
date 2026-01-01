import { useCallback, useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem("");
  }, [groceryItem, items]);

  return (
    <SafeAreaView>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={(text) => setGroceryItem(text)}
        testID="grocery-input"
      />
      <Button
        title="Add the item to list"
        onPress={addNewItemToShoppingList}
        testID="add-grocery-button"
      />
      {items.map((item) => (
        <Text key={item} testID={item}>
          {item}
        </Text>
      ))}
    </SafeAreaView>
  );
}
