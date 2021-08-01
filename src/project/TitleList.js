import React from 'react';
import Title from './Title';
function TitleList(props){
     let movies = props.filteredmovies.map((movie,i) => {
          return <Title key={i} title={movie.title} category={movie.category} rating={movie.rating}/>
      }) 
    
    return(
       <div>
            {movies}
       </div>
   )
}
export default TitleList;