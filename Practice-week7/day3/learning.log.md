Learning Log: State Management and Redux Toolkit

Date: November 4, 2026

Topics: React State Management, Redux, Redux Toolkit, TypeScript Integration.

1. Introduction
Today, I studied different state management approaches in React and learned how to implement global state management using Redux Toolkit.

2. State Management Approaches
- useState: React Hook used to manage local component state, such as forms, counters and modals.
- Context API: Allows sharing data between components without manually passing props through multiple levels.
- Redux: A centralized state management library that manages application state through a store, actions and reducers.
- Redux Toolkit: The officially recommended approach for writing Redux logic with less boilerplate and simpler configuration.

3. Redux Core Concepts
- Store: Holds the global application state.
- Action: Describes an event or state change.
- Reducer: Determines how the state changes.
- Dispatch: Sends actions to the Redux store.
- Selector: Reads data from the Redux store.

4. Redux Toolkit Implementation
Installed the required packages:
npm install @reduxjs/toolkit react-redux


Created a Redux store using configureStore() and implemented a counter slice using createSlice().

Implemented the following operations:
- Increment counter.
- Decrement counter.
- Reset counter.
- Increment by a specified amount.

5. React and Redux Integration
Used the React Redux Provider component to make the store accessible throughout the application.

Implemented typed Redux hooks:
- useAppSelector() to access global state.
- useAppDispatch() to dispatch Redux actions.

6. Global State Sharing
Implemented separate components:
- CounterDisplay: Reads and displays the global counter value.
- CounterControls: Dispatches actions to update the counter.
Both components access the same Redux store without passing state through props.

7. Key Learnings
- Understood the differences between local and global state management.
- Learned the advantages and limitations of Context API and Redux Toolkit.
- Understood Redux store, actions, reducers and dispatch.
- Learned how to configure a Redux store using TypeScript.
- Implemented Redux slices and connected them to React components.
- Understood how multiple components can share centralized application state.

8. Conclusion
Successfully implemented a Redux Toolkit counter application using React and TypeScript. Gained practical knowledge of centralized state management and learned how Redux Toolkit helps manage shared application data in scalable React applications.