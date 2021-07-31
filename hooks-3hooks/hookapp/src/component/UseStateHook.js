import React, { useState } from "react";

function UseState() {
  const [myState, setmyState] = useState(0);
  const [age, setAge] = useState(10);
  const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <p>You clicked {myState} times </p>
      <p>You clicked {age} times </p>
      <p>You clicked {fruit} times </p>
      <button onClick={() => setmyState(myState + 1)}>Click me</button>
      <button onClick={() => setAge(age + 10)}>Click for age</button>
      <button onClick={() => setFruit("apple")}>Click for fruit</button>
    </div>
  );
}
export default UseState;
