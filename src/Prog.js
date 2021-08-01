import React from 'react';
import SearchBox from './project2/SearchBox';
import DogList from './project2/DogList';
import Dog from './project2/Dog';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
class prog extends Component {
     constructor(props) {
     super(props);
     this.state = {
         dogs:[
             {name:"Max",breed:"lab"},
             {name:"Sparky",breed:"German Shepard"},
             {name:"Rex",breed:"Boxer"},
             {name:"George",breed:"Pitbull"},
             {name:"Sally",breed:"Poodle"}
         ],
         searchDog:''
     }
  }
  handleInput = (e)=>{
     this.setState({searchDog:e.target.value})
  }
 render()  {
     let filteredDogs = this.state.dogs.filter((dog)=>{
         return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())

     })
     return (
        <div>
            <SearchBox handleInput={this.handleInput}/>
         <DogList filteredDogs={filteredDogs}/>
        </div>
     );
  }
}
export default prog;
