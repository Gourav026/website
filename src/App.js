import './App.css';
import Header from "./My components/Header";
import {Todos} from "./My components/Todos";
import {Footer} from "./My components/Footer";
import {AddTodo} from './My components/AddTodo';
import {About}  from  './My components/About';
import React, {useEffect, useState} from 'react';
import {
      BrowserRouter as Router,
      Switch,
      Route
    } from "react-router-dom";

function App() {
     let initTodo;
      if(localStorage.getItem("todos")===null){
            initTodo = [];
      }
      else{
            initTodo = JSON.parse(localStorage.getItem("todos"));
      }
     const onDelete=(todo)=>{
            console.log("I am onDelete of todo",todo);
            //deleteing this way in react doesnot work
           // let index = todos.indexOf(todo);
            //todos.splice(index,1);
            setTodos(todos.filter((e)=>{
                return e!==todo;
            }));
            localStorage.setItem("todos",JSON.stringify(todos));
      }
          const addTodo = (title,desc)=>{
                console.log("I am adding this todo", title,desc)
                let sno;
                if(todos.length===0){
                      sno = 0;
                }
                else{
                   sno = todos[todos.length-1].sno + 1;
                }
                 
                const myTodo = {
                      sno:sno,
                      title: title,
                      desc : desc,
                }
                setTodos([...todos,myTodo]);
                console.log(myTodo);
               
            
          }
          const [todos,setTodos]=useState(initTodo);
          useEffect(() => {
            localStorage.setItem("todos",JSON.stringify(todos));
       }, [todos])
        

      return (
      <>     
         <Router>
                  <Header title="My Todos List" searchBar={false}/>
                      <Switch>
                           <Route exact path="/" render={()=>{
                                 return(
                                   <>    
                                    <AddTodo addTodo={addTodo}/>
                                    <Todos todos={todos} onDelete={onDelete}/>
                                    </> )
                           }}>
                           </Route>
                           <Route exact path="/about">
                           <About />
                           </Route>
                      </Switch>
                  
                  <Footer/>
          </Router>
            
       
      </>
   );


}

export default App;
