import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App';
import Home from './Home';
import  Login  from './Login';
import { Register } from './Register'
import Movie from './Movie'


function Pro() {

    return (
        <>
             <Movie/>
       { /* <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/Register" component={Register}></Route>
            </Switch>
         </Router>*/}

        </>



    );

}
export default Pro;