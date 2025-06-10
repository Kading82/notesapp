import reactLogo from "./assets/react.svg";
import "./App.css";
import headshot from "./images/headshot_webpage.jpg"

function Image() {
  return <img width={200} height={175} src={headshot} padding={10} align="left" alt="Headshot" />;
}

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

function Item(){
  return(
    <div className="item">
      <h2>MySQL Databases from top to botttom.</h2>
      <p>From writing scripts to perfrom complex database operations to optimizing existing queries using such methods as indexing.</p>
    </div>
  );
}

function ItemTwo(){
  return(
    <div className="item">
      <h2>Item2</h2>
      <p>Dummy text, foo bar, custom linux kernels and more!!</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="mainheader">
          <Image/>
          <MainHeader/>
          <br />
          <p>Web Developer with 9 years of experience.</p>
        </div>
          <Item/>
          <ItemTwo/>
        <br />
          <MainInput/>
        <br />
          <MainButton/>
      </header>
    </div>
  );
}

export default App;
