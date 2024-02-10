# What is Hooks
**Hooks are the new feature introduced in the React 16.8 version.**  
- React hooks are ``methods`` that allow us to use state and other React features *without writing a class*. 
- Hooks are backward-compatible, which means it does not contain any breaking changes.

**This can significantly improve the readability, maintainability, and testability of your React code.**
# Why use Hooks?
**Hooks were introduced to address several issues and make React code easier to understand and maintain:**

**Complexity** – class components can become complex when managing state and side effects. :confounded::anguished::cold_sweat:

**Reusability** – logic in class components isn't easily shareable between components. :tired_face:

**Learning Curve** - class components introduce a steeper learning curve for newcomers to React. :persevere: :no_mouth:
# When to use a Hooks
**If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class.**  

**But, now you can do it by using a Hook inside the existing function component.**

# Rules to use Hooks :book:
## Top-Level Calls:

Only call hooks at the **top level** of your function component. 
- This means outside of any loops, conditions, or nested functions.
- This is because for React to render your component correctly, it needs to know which hooks are invoked in what sequence.  
## Function Component Friends:
Hooks can only be called from React function components, not class components.

They don't work in regular JavaScript functions or class components.
## Hook Naming:

Use the use **prefix** for all hook names (e.g., ``useState``, ``useEffect``).

This makes them **easily identifiable** and **avoids conflicts** with other functions.
## Ordering and Consistency:

Call hooks in the same order throughout your component.  

React relies on this order to manage hook state correctly.

**Don't conditionally call hooks.**
- Avoid placing them inside an if statement or similar logic.

# Example
## Without Hooks
```javascript
import React, { Component } from 'react';
class ClassCounter extends Component {
constructor(props) {
super(props);
this.state = {
count:0
}
}
incrementCount = () =>{
this.setState({count:this.state.count + 1})
}
render() {
return (
<div>
<button onClick={this.incrementCount}>COUNT : {this.state.count}</button>
</div>
);
}
}
export default ClassCounter;
```
## With Hooks
``` javascript
import React , {useState} from 'react';
function HooksCounter() {
const [count,setCount] = useState(0);
return (
<div>
<button onClick={()=>setCount(count + 1)}>COUNT : {count}</button>
</div>
);
}
export default HooksCounter;
```
# React Hook List
## Basic Hooks:

1. **useState**: Manages state within a function component. Stores and updates data that triggers re-renders.
2. **useEffect**: Performs side effects after a component mounts, updates, or unmounts. Used for data fetching, subscriptions, and DOM manipulation.
3. **useContext**: Accesses context data established by ancestor components. Simplifies passing data down complex component hierarchies.
## Additional Hooks:

1. **useReducer**: Similar to useState but for more complex state management, using a reducer function.
useCallback: Creates a memoized callback function to avoid unnecessary re-renders when props or state change.
2. **useMemo**: Memoizes a computed value to avoid expensive re-computations when dependencies haven't changed.
3. **useRef**: Creates a mutable reference object to persist values across renders. Often used for DOM node access or storing previous values.
useImperativeHandle: Allows parent components to "ref" a function inside a child component and call it.
4. **useLayoutEffect**: Similar to useEffect but fires synchronously after DOM mutations, useful for measuring layout effects.
5. **useDebugValue**: Adds a custom label to a hook in React DevTools for easier debugging.
6. **useDeferredValue**: Suspends rendering until a value is resolved, improving perceived performance.
7. **useTransition**: Manages complex UI transitions and animations.
8. **useId**: Generates unique IDs for elements within the component.