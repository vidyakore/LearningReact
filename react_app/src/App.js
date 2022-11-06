// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {


  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>Hi This is a children props</p>
      </Greet>
      <Greet name="clark" heroName="Superman" />
      <p>Hi This is one more children props</p>
      <Greet name="hina" heroName="wonderwoman" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="clark" heroName="Superman" />
      <Welcome name="hina" heroName="wonderwoman" /> */}
      <Message />
      {/* <Hello /> */}
      <Greet name="clark" heroName="Superman" />
    </div>
  );


}

export default App;
