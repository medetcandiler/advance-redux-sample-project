import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./app/features/counter/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter)
  const dispatch = useDispatch();
  const counterRef = useRef(null);


  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    console.log(typeof counterRef.current.value)
    if (
      counterRef.current.value !== ""
    ) {
      dispatch(incrementByAmount(Number(counterRef.current.value)));
    } else {
      alert("add some value to the input");
    }
  };

  return (
    <main>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
      <input ref={counterRef} type="number" />
      <button onClick={handleIncrementByAmount}>+</button>
    </main>
  );
}

export default App;
