# What Are Props in React?
**Props simply stands for properties.**   
- They are what make components reusable. :recycle:
- They pass data from one component to another.  

**Props act as a channel for component communication.**  
- Props are passed from parent to child and help your child access properties that made it into the parent's tree.

## It's worth noting that:
**1. We use props in both functional and class-based components.**  

**2. We pass props from the top to bottom. We can also refer to it as ancestor to descendant, or parent to child.**

**3. Props are ``read-only``.** 
- This means that once a component receives a bunch of props, we cannot change it, but we can only use and consume it and cannot modify the properties passed down to the component. 
- If we want to modify that, we'll have to introduce what we call state in React.

# How to Send Props into a Component

**The method of passing props into a component resembles the way attributes function in HTML elements.**

For instance, when you intend to provide attributes to an input element in HTML, you specify the attribute along with its corresponding value, as demonstrated below:
``` html
<input type="text" placeholder="Cyxus" />
```

<div style="text-align: center; font-size: 12px; font-weight: bold">
Html input elements and attribute
</div>

## Syntax

``` html
<ComponentName property1="value" property2="value" property3="value" />
```
Within the component tag, after writing the component name we will assign a value to each property.

let's use the syntax above to pass data into the ``App.js`` component:
``` html
<Product
img="https://ng.jumia.is/unsafe/fitin/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
 name="Cyxus"
  description="Non-Slip Fitness Leisure Running Sneakers"
  price="$29"
/>
```

# How to Use Props in React
## 1. How to Use Props Without Destructuring
To get started, let's create a functional component:

``` javascript
import React from "react";
 
function MyProducts() {
  return (
    <div>
  
    </div>
  );
}
 
export default MyProducts;
```

Then we want to initialize our props. So our functional component would look like this:


``` javascript
import React from "react";
 
function MyProducts(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.img}</p>
    </div>
  );
}
 
export default MyProducts;
```

**We passed in props as an argument in our function. props gets passed as a parameter to our functional component.** 
- We then tried to access it by writing the following: the props.name, props.price, and props.description.

**Now that we've done that, we can go back to our App.js to render our product and pass some data to these three props.**
- Props are passed in like HTML attributes. Our App.js will look like this:
``` javascript
import "./App.css";
import MyProducts from "./MyProducts";
function App() {
  return (
    <div className="App">
      <MyProducts
        name="temitope"
        description="the product has fantastic features"
        price={1000}
        img=""
      />
    </div>
  );
}
 
export default App;
```

