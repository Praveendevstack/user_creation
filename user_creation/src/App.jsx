import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <p>User Creation</p>
        <label>
          user name:{" "}
          <input
            type="text"
            name="username"
            id=""
            placeholder="Enter the name of the user"
          />
        </label>
        <label htmlFor="">
          Password:{" "}
          <input type="password" name="password" id="" placeholder="password" />
        </label>
        <label htmlFor="">
          Email Id: <input type="email" name="" id="" placeholder="mail id" />
        </label>
        <label htmlFor="">
          Mobile No:
          <input type="number" name="" id="" placeholder="mobile number" />
        </label>
        <label htmlFor="">User_Department:</label>
        <select name="cars" id="cars">
          <option value="volvo">All</option>
          <option value="saab"></option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </>
  );
}

export default App;
