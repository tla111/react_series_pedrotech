import './App.css';
// import AppleStore from './Components/AppleStore';
// import User from './Components/User';
// import Car from './Components/Car';

function App() {
  // const age = 19;
  // const isGreen = true;
  // const isBlue = true;
  // const bgYellow = false;
  // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"];
  // const users = [
  //   { name: "Pedro", age: 21 },
  //   { name: "Jake", age: 25 },
  //   { name: "Jessica", age: 45 },
  // ]
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ]

  return (
    <div className="App">
      {/* <User name="Pedro" age={21} email="pedro@gmail.com" />
      <User name="Tim" age={29} email="tim@gmail.com" />
      <AppleStore product="iPhone" quantity="1" price="500" />
      <Car model="Toyota CH-R" color="Bronze" year="2021" /> */}
      {/* {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This Has Color</h1>
      <h2 style={{ color: isBlue ? "blue" : "orange", backgroundColor: bgYellow ? "yellow" : "black" }}>This is Blue</h2> */}
      {/* {users.map((user, key) => {
        return (
          <User2 name={user.name} age={user.age} key={key} />
        )
      })} */}
      {planets.map((planet, key) => {
        return (
          <Planet name={planet.name} />
        )
      })}
    </div>
  );
}

// const User2 = (props) => {
//   return (
//     <div>
//       {props.name} {props.age}
//     </div>
//   );
// }

const Planet = (props) => {
  return (
    <div>{props.name}</div>
  )
}



export default App;
