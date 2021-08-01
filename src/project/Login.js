import React from 'react'

 function Login() {
    return (
        
        <form action="" >
        <div className="user">
           <label htmlFor="Username">Username</label>
            <input type="text" name="Username" id="Username" />
        </div>
        <div className="pass">
           <label htmlFor="Password">Password</label>
            <input type="text" name="Password" id="Password" />
        </div>
           <button type="login" className="sub">login</button>
          </form>
        
    )
}
 export default Login;