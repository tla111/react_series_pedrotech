import './App.css';

function App() {
  const name = <h2>Pedro</h2>
  const age = <h3>21</h3>
  const email = <h4>Pedro@pedro.com</h4>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  )
  return (
    <div className="App">
      {user}
    </div>
  );
}

export default App;
