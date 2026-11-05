import { createContext, useContext, useReducer, type ReactNode } from "react";
import { counterReducer, initialState, type CounterState, type CounterAction } from "../reducers/counterReducer";

// Define Context type 
interface CounterContextType {
    state: CounterState;
    dispatch: React.Dispatch<CounterAction>;
}

// Create Context
const CounterContext = createContext<CounterContextType | null>(null);

// create Provider
export function CounterProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [state, dispatch] = useReducer(
        counterReducer, initialState
    );

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}

// custom hook to access Context
export function useCounter() {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error(
            "useCounter must be used inside CounterProvider"
        );
    }
    return context;
}