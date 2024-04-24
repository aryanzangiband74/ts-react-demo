import { useReducer } from "react";
const initialState = {
    count: 0,
};
type CounterState = {
    count: number;
};

type UpdateAction = {
    type: "increment" | "decrement";
    payload: number;
};
type ResetAction = {
    type: "reset";
};


type CounterAction = UpdateAction | ResetAction;



function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        case "reset":
            return { count: 0 };

        default:
            return state;
    }
}

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            count : {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
};

export default Counter;
