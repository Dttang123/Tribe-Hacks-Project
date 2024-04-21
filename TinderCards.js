import React, { useEffect, useState } from 'react';
import database from './firebase'
import TinderCard from "react-tinder-card";

 

function TinderCards() {
    const [people, setPeople] = useState([]);

    // Piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs....

        // this will run ONCE when the component loads, and never run again
        
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.maps(doc => doc.data())) 
        ))
    }, []);


    // BAD
    //      const people = [];
    //      people.push('sonny', 'qazi')


    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'sonny', 'qazi']) 
    // ... means to add items to the after current items
    
  return (
    <div>
      <h1>Tinder cards</h1>

      <div className="tinderCards_cardContainer"> 
      {people.map((person) => (
        <TinderCard
            className="swipe"
            key={person.name}
            perventSwipe={['up', 'down']}
        >
            <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
            >
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>     
    </div>
  );
}

export default TinderCards

