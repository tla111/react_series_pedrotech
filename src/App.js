import './App.css';
import AppleStore from './Components/AppleStore';
import User from './Components/User';
import Car from './Components/Car';

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@gmail.com" />
      <User name="Tim" age={29} email="tim@gmail.com" />
      <AppleStore product="iPhone" quantity="1" price="500" />
      <Car />
    </div>
  );
}



export default App;
