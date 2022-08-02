import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@gmail.com" />
      <User name="Tim" age={29} email="tim@gmail.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

export default App;
