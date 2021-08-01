import React from 'react';
import Title from './Title';
function GenerList(props){
     let movies = props.filteredmovies.map((category,i) => {
          return <Title key={i} title={movie.title} category={movie.category}/>
      }) 
    
    return(
       <div>
            {movies}
       </div>
   )
}
export default Generlist;