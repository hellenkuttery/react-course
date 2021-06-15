import './App.css';
import User from "./components/user"
import User2 from "./components/user2"
import Card from "./components/Card"
import Inline from "./components/inline"
import StyleSheet from "./components/stylesheet/StyleSheet"


function App() {
  const motto="Way reinvent yourself";
  return (
   <div>
    {/* // First Lesson
    // <div className="App">
    //   {/* 2+2 is different from {2+2}. 2+2 is a visual.If we write in {},It will compiled like javascript code */}
    {/* //   {2+2}
    //   <h2>{"REACT Course".toLocaleUpperCase()}</h2>
    //   <h2>{motto}</h2>
    //   <User/>
    //   <User2/>
    </div> */}
    {/* Second Lesson
    <div className="App">
      <Card name="Cody" job="React Instructor"/>
      <Card name="Helen" job="HTML Instructor"/>
Third Lesson  */}
    <Inline/>
    <StyleSheet isPrimary={true}/>
 



    </div>
  );
}

export default App;
