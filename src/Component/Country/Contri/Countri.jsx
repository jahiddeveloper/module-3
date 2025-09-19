import React from 'react';
import "./countri.css";

const handleVisited = () => {
    console.log("button clicked");
}

const Countri = ({countri}) => {
    console.log(countri.area.area);
    return (
        <div className='countri'>
            <img className='style-flag' src={countri.flags.flags.png} alt={countri.flags.flags.alt} />
            <h3>Name : {countri.name.common}</h3>
            <p>Population : {countri.population.population}</p>
            <p>Region : {countri.region.region}</p>
            <h4>Capital : {countri.capital.capital}</h4>
            <p>Area : {countri.area.area} {countri.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            
            <button onClick={handleVisited}>No visit</button>
        </div>
    );
};

export default Countri;