// to emulate React render function.
function customRender(reactElement, container){
    // create a element
    const domElement = document.createElement(reactElement.type);

    // set inner html
    domElement.innerHTML = reactElement.children;

    // set attributes to domHtml
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue;
        }

        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    // append the new element in the container
    container.append(domElement);
}


// test input element object
const reactElement = {
    type:"a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click here to visit"
}

// Select the element with the id 'root' and assign it to the variable 'root'
const root = document.querySelector('#root');

// call the method to append the element 
customRender(reactElement, root);
