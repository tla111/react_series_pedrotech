import { useState } from 'react';
// import './App.css';
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
  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlanet: true },
  // ]

  // const isGasPlanetPlanets = planets.filter(planet => planet.isGasPlanet === true);

  // const [age, setAge] = useState(0);
  // const [inputValue, setInputValue] = useState("");
  // const [showText, setShowText] = useState(true);
  // const [textColor, setTextColor] = useState("red");
  // const [count, setCount] = useState(0);

  // const increaseAge = () => {
  //   setAge(age - 1);
  // }

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value)
  // }

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
      {/* {planets.map((planet, key) => {
        return (
          <Planet name={planet.name} />
        )
      })}
      {isGasPlanetPlanets.map((planet, key) => {
        return (
          <Planet name={planet.name} />
        )
      })}
      {planets.map((planet, key) => planet.isGasPlanet ? <Planet name={planet.name} key={key} /> : "")} */}
      {/* {age}
      <button onClick={increaseAge}>Increase Age</button>
      <input type="text" onChange={handleInputChange} />
      {inputValue} */}
      {/* <button onClick={() => setShowText(!showText)}>Show/Hide</button> */}
      {/* {showText === true && <h1>HI MY NAME IS PEDRO</h1>} */}
      {/* <button onClick={() => setTextColor(textColor === "red" ? "blue" : "red")}>Change Color</button>
      <h1 style={{ color: textColor }}>HI MY NAME IS PEDRO</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease </button>
      <button onClick={() => setCount(0)}>Set to Zero</button>
      {count} */}
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

// const Planet = (props) => {
//   return (
//     <div>{props.name}</div>
//   )
// }



export default App;
