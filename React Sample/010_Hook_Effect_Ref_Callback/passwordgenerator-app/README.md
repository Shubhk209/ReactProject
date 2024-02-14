# Prop

In React, props are the read-only properties you pass to components to control their behavior and appearance.

They act like arguments passed to functions, allowing you to send information from one component to another.

# Install React using Vite bundler

Create React Project: `npm create vite@latest my-vue-app --template react`

Install Dependencies: `npm i`

Run Project: `npm run dev`

# Install Tailwindcss for Vite

**Install its peer dependencies:**

```
npm install -D tailwindcss postcss autoprefixer
```

**Generate your tailwind.config.js:**

```
npx tailwindcss init -p
```

**Configure your template paths**

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
```

**Add the Tailwind directives to your CSS**

- Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Install Tailwind CSS with Vite**: [Vite Guide](https://tailwindcss.com/docs/guides/vite)

# Project Details

This project is used to generate a

- Password Length required.
- Password Number allow.
- Password Character allow.

# useCallback Hook

React Hook that lets you cache a function definition between re-renders.

```javascript
const cachedFn = useCallback(fn, dependencies);
```

# useEffect Hook

# useRef Hook
