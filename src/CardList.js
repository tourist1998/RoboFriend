import React from 'react';
import {robots} from './Robot.js'
import Card from './Card'; 

const CardList = ({robots}) => {
    const cardcomponent = robots.map((user,i) => {
        console.log(robots[i].id);
        return <Card 
            id={robots[i].id} 
            name={robots[i].name} 
            email= {robots[i].email}
         />
    }) 
    return (
        <div>
            {cardcomponent}
        </div>
    );
}
export default CardList; 