import React, { useState } from 'react';


const  Admin = (props) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const onChangeUsername = (e)=>{
    setUsername(e.target.value);
  };
  const onChangePassword = (e)=>{
    setPassword(e.target.value);
  };

 const onsubmit = (e)=>{
    e.preventDefault();
    fetch('https://agile-tor-34853.herokuapp.com/admin',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
        username: username,
        password: password
        })
    }).then(res=> res.json())
    .then(res => {
        if(res === "success logging  in"){
          props.onChangeAdmin();
        }else{
          console.log("error logging in")
        }
    })
    
  }

    return(
        <div className="row">
             <h1 className="f4 fw6 ph0 ">Sign in</h1>
            <form className="col s12" onSubmit={onsubmit}>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="first_name" type="text" required onChange={onChangeUsername}/>
                    <label htmlFor="first_name">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" required onChange={onChangePassword}/>
                    <label hmtlfor="password">Password</label>
                    </div>
                </div>
                <div className="">
                    <input className="button ph3 pv2 input-reset ba white grow pointer f6 dib" type="submit" value="Submit"/>
                    </div>
            </form>
       </div> )
}


export default Admin