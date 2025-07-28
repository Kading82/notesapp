import "./App.css";
import headshot from "./images/headshot_webpage.jpg"

function Image() {
  return <img width={200} height={175} src={headshot} padding={10} alt="Headshot" />;
}

function MainInput({ inputName, inputDescription }) {
  return(
    <div className="input">
    {inputDescription}: <input name={inputName}></input>
    </div>
  );
}

function MainHeader(){
  return(
    <div classname="mainheader" >
      <img width={200} height={175} src={headshot} padding={10} alt="Headshot" />
      <h2>August Kading</h2>
      <p>Web Developer with 9 years of experience.</p>
    </div>
  );
}

function MainButton(){
  return(
    <button>Submit</button>
  );
}

function Item({ title, description, image }){
  return(
    <div className="item">
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="mainheader">
          <MainHeader/>
      </div>
          <Item title="MySQL Databases from top to botttom" 
          description="From writing scripts to perfrom complex database operations to optimizing existing queries using such methods as indexing."
          />
          <Item title="Cloud Services inside and out"
          description="This site is hosted on AWS right now using such AWS services as Route 53 and AWS Amplify.  I can also work with Azure!"
          />
          <Item title="CI/CD, I can do that"
          description='As well as being hosted on AWS, this site also uses other technologies to automatically upload each push to "production."  Making each push live shortly after passing through the CI/CD workflow.'
          />
        <br />
          <MainInput inputDescription="Sample Data 1"/>
          <MainInput inputDescription="Sample Data 2"/>
          <MainInput inputDescription="Sample Data 3"/>
          <MainInput inputDescription="Sample Data 4"/>
        <br />
          <MainButton/>
    </div>
  );
}

export default App;
