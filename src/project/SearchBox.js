import { render } from '@testing-library/react';
import React from 'react';

function SearchBox(props) {
    

    return (
        <div>
           <input onChange={props.handleTitleInput} type="text" placeholder="Enter Movie Name" value={props.handleTitleValueInput}/>
           
            <select onChange={props.handleGenerInput}>
            {(props.handleTitleValueInput || props.handleRatingValueInput) ? (<option selected value="">Select Genres</option>):(<option value="">Select Genres</option>)}
             

              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
            </select>
            <select  onChange={props.handleRatingInput}>
            
            {props.handleTitleValueInput ? (<option selected value="">Select Rating</option>):(<option value="">Select Rating</option>)}

                   {/*   <option value="0" selected="">Select Rating</option> */}
                      <option value="1">*</option>
                      <option value="2">* * </option>
                      <option value="3">* * *</option>
                      <option value="4">* * * *  </option>
                      <option value="5">* * * * *  </option>
                      <option value="6">* * * * * *  </option>
                      <option value="7">* * * * * * *  </option>
                      <option value="8">* * * * * * * *  </option>
                      <option value="9">* * * * * * * * *  </option>
                      <option value="10">* * * * * * * * * * </option>
                    </select>
                  
        </div>
    )
}

export default SearchBox;