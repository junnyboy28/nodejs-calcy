const { appendToDisplay, clearDisplay, calculate } = require("./script");

describe("Calculator Functions", () => {
  beforeEach(() => {
    global.currentInput = "";
  });

  test("should append numbers to display", () => {
    appendToDisplay("5");
    appendToDisplay("3");
    expect(global.currentInput).toBe("53");
  });

  test("should clear display", () => {
    appendToDisplay("5");
    clearDisplay();
    expect(global.currentInput).toBe("");
  });

  test("should calculate correct result", () => {
    appendToDisplay("3+2");
    calculate();
    expect(global.currentInput).toBe(5);
  });

  test("should handle division by zero", () => {
    appendToDisplay("10/0");
    calculate();
    expect(global.currentInput).toBe("Error");
  });

  test("should handle invalid expressions", () => {
    appendToDisplay("2++2");
    calculate();
    expect(global.currentInput).toBe("Error");
  });
});
