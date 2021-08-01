
import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const navigateTo = () => history.push('/Login');
  const redirectTo = () => history.push('/Register');
  
   
  return (
    <>
    <div className="bg">

      <nav className="navbar navbar-expand-lg navbar-light bg-lightnavbar navbar-dark bg-dark">
        <div className="container-fluid">


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>

            </ul>

          </div>
        </div>

      </nav>

      <button className="log" onClick={navigateTo}>LOGIN</button>
      <button className="reg" onClick={redirectTo}>REGISTER</button>
      
     
    </div>

      </>
   
  );
}


