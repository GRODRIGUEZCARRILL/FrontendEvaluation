/*aqui queria hacer un loggin en react y mandarlo a empoyees-list*/
import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';

function App() {
  const adminUser={
    email: "guille@admin.com",
    pasword: "12345"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error,setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password==adminUser.pasword)
      console.log("logged in");
    } else {
      console.log("ingresar datos correctos");
    }
  }
  

  const Logout = () =>{
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.email !="")?(
        <div className='Bienvenidos entren con guille@admin y contra 12345'>
          <h2>Bienvenidos,<span>(user.name)</span></h2>
          <button>Logout</button>
      </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );



export default App;
