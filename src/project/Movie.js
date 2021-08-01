import React from 'react';
import { Component } from 'react';
import SearchBox from './SearchBox';
import TitleList from './TitleList';



class Movie extends Component {
  constructor(props) {
  super(props);
  this.state = {
      movies:[
          {title: 'The Matrix',category: 'Action',rating: 7.5},
          {title: 'Focus',category: 'Comedy',rating: 6.9},
          {title: 'The Lazarus Effect', category: 'Thriller',rating: 6.4},
          {title: 'Everly',category: 'Action',rating: 5.0},
          {title: 'Maps to the Stars',category: 'Drama',rating: 7.5},
      ],
       searchTitle:'',
       searchGenre:'',
       searchRating:''
       
    }
  }

   handleTitleInput = (e)=> {
  //console.log('title--->',e.target.value);

    this.setState({searchTitle:e.target.value,searchGenre:'',searchRating:''})
   }
     handleGenerInput = (e)=> {
   //console.log('genere--->',e.target.value);
     this.setState({searchGenre:e.target.value,searchTitle:'',searchRating:''})
  }
     handleRatingInput = (e)=> {
     console.log('rating--->',e.target.value);
      this.setState({searchRating:e.target.value,searchTitle:'',searchGenre:''})
  }
 

   render() {

    let filteredmovies = this.state.movies.filter((movie)=>{
        return movie.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())
    })

    if(this.state.searchGenre){
      filteredmovies = this.state.movies.filter((movie)=>{
        return movie.category.toLowerCase().includes(this.state.searchGenre.toLowerCase())
      })
    }
     if(this.state.searchRating){
        filteredmovies = this.state.movies.filter(movie=> Math.round(movie.rating) ==  Math.round(this.state.searchRating))
    }
    return(
       
         <div>
           <SearchBox 
              handleTitleInput={this.handleTitleInput} 
              handleTitleValueInput={this.state.searchTitle}  
              handleGenerInput={this.handleGenerInput}
              handleGenerValueInput={this.state.searchGenre}
              handleRatingInput={this.handleRatingInput}
              handleRatingValueInput={this.state.searchRating}
           />
           <TitleList filteredmovies={filteredmovies} />         

           
         </div>
       
       );
   }
} 
export default Movie; 