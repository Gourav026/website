import React from 'react';
import {Component} from 'react'
function Dog(props) {
    return(
    <div>
        <p>Name: {props.name}</p>
        <p>Breed: {props.breed}</p>
    </div>
    )
}
export default Dog;