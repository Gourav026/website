import React from 'react';
import {Component} from 'react'
function Title(props) {
    return(
    <div>
        <p>title: {props.title}</p>
        <p>category: {props.category}</p>
        <p>rating:{props.rating}</p>
        
        
    </div>
    )
}
export default Title;