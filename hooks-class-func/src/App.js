import './App.css';
import ClassComponent from "./components/ClassComponent";
import Functional from "./components/FunctionalComponent";
import ReadMoreLess from "./components/ReadMoreLess";
import { useState } from 'react';
import UseReference from "./components/UseRef"
// import StepTracker from "./components/StepTracker";
// import ListOfThings from "./components/ArrayState"

function App() {
  const [isVisible,setViisible]=useState(true);
  return (
    <div className="App">
      <UseReference/>
      <button onClick={()=> setViisible(!isVisible)}>Toggle</button>
      <ClassComponent/>
      <Functional/>
      <ReadMoreLess/>
      {/* <StepTracker/> */}
      {/* <ListOfThings/> */}
    </div>
  );
}

export default App;
