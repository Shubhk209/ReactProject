# Prop
In React, props are the read-only properties you pass to components to control their behavior and appearance.

They act like arguments passed to functions, allowing you to send information from one component to another.

# Install React using Vite bundler
Create React Project: ``npm create vite@latest my-vue-app --template react``

Install Dependencies: `npm i`

Run Project: `npm run dev`




# Install Tailwindcss for Vite
**Install its peer dependencies:**
````
npm install -D tailwindcss postcss autoprefixer
````

**Generate your tailwind.config.js:**

````
npx tailwindcss init -p
````


**Configure your template paths**

````
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
````

**Add the Tailwind directives to your CSS**
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
````
@tailwind base;
@tailwind components
@tailwind utilities;
````
# Error
