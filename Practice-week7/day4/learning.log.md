
# Week 7 Day 4 – React Hooks, Context API & Data Visualization

## 1. Learning Objectives

- Understand Context API and useReducer for global state management.
- Explore React Hooks: useState, useEffect, useMemo, useCallback, and useContext.
- Learn how to create and use custom Hooks.
- Explore React chart libraries, including Chart.js and Recharts.
- Implement a responsive chart using Recharts.

## 2. Topics Covered

### Context API + useReducer
- Implemented global state management using Context API and useReducer.
- Created a CounterContext and CounterProvider.
- Used dispatch to manage different counter actions.
- Shared global counter state across Navbar, Counter, and Dashboard components.

### React Hooks
- **useState:** Managed component-level state.
- **useEffect:** Handled side effects and updated the browser document title.
- **useMemo:** Memorized calculated values such as the squared counter value.
- **useCallback:** Memorized event handler functions to avoid unnecessary function recreation.
- **useContext:** Accessed shared global state.
- **Custom Hooks:** Created a reusable useWindowWidth Hook to track browser window width.

### Chart Libraries
- Explored Chart.js and Recharts.
- Learned the differences between the two charting libraries.
- Installed and configured Recharts.
- Created a responsive Bar Chart to visualize monthly user statistics.

## 3. Practical Implementation

Implemented a React application containing:

- **Navbar:** Displays the global counter value.
- **Counter:** Supports increment, decrement, reset, and increment by five.
- **Dashboard:** Displays global counter data and current browser width.
- **Custom Hook:** Tracks browser resizing dynamically.
- **StatsChart:** Displays monthly user statistics using Recharts.

## 4. Key Learnings

- Understood how Context API and useReducer work together for global state management.
- Learned how dependency arrays work in useEffect, useMemo, and useCallback.
- Understood the difference between useMemo and useCallback.
- Learned how to create reusable custom Hooks.
- Practiced event listeners and cleanup functions.
- Learned how to visualize application data using Recharts.

## 5. Challenges Faced

- Fixed missing main.tsx entry-point configuration.
- Resolved missing CSS import errors.
- Corrected component imports and file paths.
- Fixed JSX placement and component rendering issues.
- Integrated Context API with multiple components.

## 6. Outcome

Successfully implemented a React application using Context API, useReducer, multiple React Hooks, custom Hooks, and Recharts. Tested global state updates, browser resizing, and chart rendering.

## 7. Next Steps

- Review today's concepts.
- Complete the learning log.
- Commit and push the implementation to GitHub.
- Create a Pull Request and share the links with the mentor.
