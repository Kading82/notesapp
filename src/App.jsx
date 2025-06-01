import reactLogo from "./assets/react.svg";
import "./App.css";

function MainInput() {
  return(
    <input></input>
  );
}

function MainHeader(){
  return(
    <h1>August Kading</h1>
  );
}

function MainButton(){
  return(
    <button>Submit</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MainHeader/>
        <h2>Web Developer with 9 years of experience.</h2>
        <MainInput/>
        <br />
        <MainButton/>

      </header>
    </div>
  );
}

export default App;
