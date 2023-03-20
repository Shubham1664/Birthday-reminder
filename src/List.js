 import React from 'react';

const list = ({people}) => {
  return (
    <>
      {people.map((person) => {
     
     return <article key={person.id} className="person">
       <img src={person.image}/>
       <div>
        <h4>{person.name}</h4>
        <p>{person.age} Years</p>
       </div>
     </article>
      })}
    </>
  );
};

export default list;
