/*aqui queria hacer un loggin en react y mandarlo a empoyees-list*/
import React, {useState} from 'react'

function LoginForm({Login, error}){
    const[details, setDetails] = useState({name:"",email:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='"form-inner'>
                <h2>Login</h2>
                {/*ERROR!*/}
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="nombre" id="nombre" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login"></input>
                


            </div>
        </form>
    )
}

export default LoginForm;