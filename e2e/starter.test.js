describe("Grocery", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  test("Text", async () => {
    await element(by.text("Grocery")).tap();
    await expect(element(by.text("Add the item to list"))).toBeVisible();
    await element(by.id("grocery-input")).typeText("Hello World");
    await element(by.id("add-grocery-button")).tap();
    await expect(element(by.id("Hello World"))).toBeVisible();
  });
});
