import './App.css';
import AppleStore from './Components/AppleStore';
import User from './Components/User';
import Car from './Components/Car';

function App() {
  const age = 19;

  return (
    <div className="App">
      {/* <User name="Pedro" age={21} email="pedro@gmail.com" />
      <User name="Tim" age={29} email="tim@gmail.com" />
      <AppleStore product="iPhone" quantity="1" price="500" />
      <Car model="Toyota CH-R" color="Bronze" year="2021" /> */}
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    </div>
  );
}



export default App;
