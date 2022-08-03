import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@gmail.com" />
      <User name="Tim" age={29} email="tim@gmail.com" />
      <AppleStore product="iPhone" quantity="1" price="500" />
    </div>
  );
}

const User = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  )
}

const AppleStore = ({ product, quantity, price }) => (
  <div>
    <h1>{product}</h1>
    <h1>{quantity}</h1>
    <h1>${price}</h1>
  </div>
)

export default App;
