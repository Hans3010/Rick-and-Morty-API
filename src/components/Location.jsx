import React from "react";
import '../App.css'

const Location = ({location}) => {


  return(
  <article className='location-container'>
    <h1 className="location-name">{location?.name}</h1>
    <ul className="location-list">
        <li ><span>Type: </span>{location?.type}</li>
        <li ><span>Dimension: </span>{location?.dimension}</li>
        <li ><span>Population: </span>{location?.residents.length} characters</li>
    </ul>
  </article>
  )

};

export default Location;
