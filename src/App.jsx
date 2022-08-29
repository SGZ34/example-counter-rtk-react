import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  IncrementBy,
} from "./store/slices/counter/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>count is {count}</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(IncrementBy(2));
          }}
        >
          IncrementBy
        </button>
      </div>
    </div>
  );
}

export default App;
