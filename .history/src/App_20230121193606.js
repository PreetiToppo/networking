import "./App.css"
import React,{useState} from 'react';

function App() {
const [data,setData] = useState({
  username:"",
  password:""
})

const {username,password} = data;

const changeHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]});
}

const submitHandler = e => {
  e.preventDefault();
  console.log(data);
}
  return (
    <div>
      <center>
      <p>SIGN IN</p>
      <form onSubmit={submitHandler}>
      <div className="name">
      <p>Username</p>  
      <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
      </div>
      <div className="pass">
      <p>Password</p> 
      <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
      </div>
      <input type="submit" name="submit"/>
      </form>
      </center>
    </div>

  );
}

export default App;
