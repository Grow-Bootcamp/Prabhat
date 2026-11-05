export interface CounterState {
    count: number;
}
export const initialState: CounterState = {
    count: 0,
};

// Avilable actions
export type CounterAction =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" }
    | { type: "INCREMENT_BY_FIVE" };

// Reducer function
export function counterReducer(
    state: CounterState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "RESET":
            return initialState;

        case "INCREMENT_BY_FIVE":
            return { count: state.count + 5 };

        default:
            return state;
    }
}