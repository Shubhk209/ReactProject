# Issue 1: Incorrectly invoking a function in onClick handler.

```javascript
const [color, setColor] = useState("olive");

return (
    <>
    <button
            onClick={setColor("Green")}
            style={{ backgroundColor: "Green" }}
    >
    </>
);
```

**The issue lies in how you're using the onClick event handler. Currently, you're directly invoking the setColor function instead of passing it as a callback.**

When you write `onClick={ setColor("Yellow")}`, **_you are not passing a function reference_** to the onClick handler.

- Instead, you're directly invoking the setColor function with the argument "Yellow" every time the component renders.
- This means that as soon as the component renders, **_it immediately sets the color to "Yellow" rather than waiting for the button to be clicked_**.
- As a result, the button essentially becomes non-functional because it doesn't wait for user interaction to change the color.

```
Uncaught Error: Too many re-renders.
React limits the number of renders to prevent an infinite loop.
```

**This happens because the onClick handler is directly invoking the setColor function, which updates the state, triggering a re-render, and this process repeats indefinitely.**

**`To fix this issue`, you need to provide a function reference to the onClick handler instead of directly invoking the setColor function.**

```javascript
const [color, setColor] = useState("olive");

return (
    <>
    <button
            onClick={() => setColor("Green")}
            style={{ backgroundColor: "Green" }}
    >
    </>
);
```

By wrapping setColor("Yellow") inside an arrow function, you ensure that it's only called when the button is clicked, preventing the infinite loop of re-renders.

## Note

**This behavior is specific to React's event handling mechanism, but it's rooted in JavaScript's behavior as well.**

**In JavaScript**, when you pass a function reference as an event handler, that function is executed when the event occurs.

- Below, **`myFunction`** is not executed immediately; it's only executed when the button with the ID 'myButton' is clicked.

```javascript
document.getElementById("myButton").addEventListener("click", myFunction);
```

However, if we write like this:

```javascript
document
  .getElementById("myButton")
  .addEventListener("click", myFunction(param1));
```

**`myFunction()`** will be executed immediately because the parentheses () after **`myFunction`** indicate a function call.

- So, it's similar to what was happening in your React code.

**In JavaScript**, the behavior of executing a function immediately instead of waiting for an event is called **`calling a function`** or **`function invocation`**.

# Issue 2: Unknown at rule @tailwind css(unknownAtRules) warning

After adding the `@tailwind` directives following the installation, we started receiving the warning.

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Resolution

1. Please double-check the Tailwind CSS installation documentation.
2. Install a Visual Studio Code extension called `PostCSS Language Support`.
