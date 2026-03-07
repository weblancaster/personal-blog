---
title: "Intro to React.js"
date: 2023-06-15
excerpt: "A beginner-friendly guide to React's component model, JSX, state management, and the mental shift from imperative to declarative UI thinking."
tags: ["react", "javascript"]
readTime: "10 min read"
published: true
---

## What is React?

React is a JavaScript library for building user interfaces. Created by Meta, it introduced a declarative, component-based model for constructing UIs that has since become the dominant pattern in frontend development.

The core idea is simple: **your UI is a function of your state**. Given the same state, React always renders the same output. You stop thinking about *how* to update the DOM and start thinking about *what* the UI should look like at any given moment.

## Components: The Building Blocks

Everything in React is a component. A component is a JavaScript function that returns JSX — a syntax extension that looks like HTML but compiles to `React.createElement()` calls.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

You compose complex UIs from small, focused components:

```jsx
function App() {
  return (
    <div>
      <Greeting name="Michael" />
      <Greeting name="World" />
    </div>
  );
}
```

## JSX Is Not HTML

JSX looks like HTML but follows JavaScript rules:

- Use `className` instead of `class`
- Self-close single tags: `<img />`, `<input />`
- Curly braces `{}` interpolate JavaScript expressions
- Event handlers are camelCase: `onClick`, `onChange`

## State and `useState`

State is data that can change over time and causes the component to re-render when it does. The `useState` hook gives you a state variable and a setter function:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Key rules:**
- State is local to the component
- Calling the setter triggers a re-render
- Never mutate state directly — always use the setter

## Side Effects with `useEffect`

`useEffect` runs code *after* the component renders. Common uses: fetching data, subscriptions, timers.

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // re-runs whenever userId changes

  if (!user) return <p>Loading...</p>;
  return <p>{user.name}</p>;
}
```

## The Mental Shift: Declarative vs Imperative

**Imperative** (vanilla JS):
```javascript
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  counter.textContent = parseInt(counter.textContent) + 1;
});
```

**Declarative** (React):
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

In the declarative version, you describe the *result*, React handles the DOM manipulation.

## Next Steps

Once comfortable with components, state, and effects, explore:

- **React Router** — client-side routing
- **React Query / TanStack Query** — async data fetching and caching
- **Context API** — sharing state across the tree without prop drilling
- **Next.js** — React framework with SSR, file-based routing, and API routes

React has a moderate learning curve but the mental model — UI as a pure function of state — scales to arbitrarily complex applications.
