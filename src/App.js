import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const friends = [
    {name: "Saddam", job: "worker"},
    {name: "Rasel", job: "job finder"},
    {name: "Bappi", job: "job finder"},
    {name: "Shawkot", job: "Student"},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>Learning react</p>
        <Count></Count>
        <User></User>
        {
          friends.map(friend => <Person friend={friend}></Person>)
        }
       
      </header>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const increaseHandlar = () => setCount(count + 1);
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increaseHandlar}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Deccrease</button>
    </div>
  )
}

function User() {
  const userStyle={
    border:"1px solid lightgray",
    marginTop:"2rem",
    padding:"0px 10px",
    width:"20rem"
  }

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);
  return (
    <div style={userStyle}>

        {
          users.map(user => (
          <h3>User Name:{user.name} </h3>
          ))
        }
  </div>
  );
}

function Person(props){
  const {name, job} = props.friend;
  return (
    <div style={{border:"2px solid gray", padding:"5px", margin:"10px",borderRadius:"5px", width:"400px"}}>
      <h1>Name : {name}</h1>
      <p>My Profession : {job}</p>
    </div>
  );
}

export default App;
