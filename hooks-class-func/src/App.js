import './App.css';
import ClassComponent from "./components/ClassComponent";
import Functional from "./components/FunctionalComponent";
import ReadMoreLess from "./components/ReadMoreLess";
// import StepTracker from "./components/StepTracker";
// import ListOfThings from "./components/ArrayState"

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <Functional/>
      <ReadMoreLess/>
      {/* <StepTracker/> */}
      {/* <ListOfThings/> */}
    </div>
  );
}

export default App;
