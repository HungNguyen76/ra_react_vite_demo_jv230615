import { useReducer } from "react";

//useState
//1. initState: 0
//2. Actions: Up (state + 1) / Down (state - 1)

//useReducer
//1. initState: 0
//2. Actions: Up (state + 1) / Down (state - 1)
//3. Reducer
//4. Dispatch
const initState = 0;

const DOWN_ACTION = "DOWN";
const UP_ACTION = "UP";

const reducer = (state, action) => {
  switch (action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: "0 20px" }}>
      <h3>useReducer</h3>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>-</button>
      <button onClick={() => dispatch(UP_ACTION)}>+</button>
    </div>
  );
};
export default UseReducer;
