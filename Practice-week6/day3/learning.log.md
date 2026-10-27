# Week 6 - Day 3: React Fundamentals

## Topics Covered

- JSX syntax
- Functional components
- Props
- State
- useState Hook
- Event handling

## 1. JSX

JSX allows us to write HTML-like syntax inside JavaScript
or TypeScript code.

Example:

const element = <h1>Hello React!</h1>;

JSX is transformed into JavaScript by React's tooling.

## 2. Functional Components

Functional components are JavaScript or TypeScript functions
that return React elements.

Example:

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

## 3. Props

Props allow a parent component to pass data to a child component.

Example:

<Profile name="Prabhat" />

Props are read-only in the receiving component.

## 4. State

State stores data managed by a component.

The useState Hook allows a functional component to manage state.

Example:

const [count, setCount] = useState(0);

The setter function updates the state and can trigger a re-render.

## 5. Props vs State

- Props are passed into a component.
- State is managed by a component.
- Both can affect what the component renders.

## 6. Practical Work

Created a React student profile application using:

- JSX
- Functional components
- TypeScript props
- useState
- Event handlers

## 7. Key Takeaways

- React applications can be divided into reusable components.
- JSX describes the user interface.
- Props pass information between components.
- State manages changing data.
- React updates the UI when relevant state changes.

## 8. Practice Outcome

Built a student profile application with reusable profile
components and a working counter.