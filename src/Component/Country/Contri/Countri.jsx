import React, { useState } from 'react';
import "./countri.css";

const Countri = ({countri, visitedCountrysHandler}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
    // setVisited(visited ? false : true)
    setVisited(!visited)
    visitedCountrysHandler()
}

    // console.log(countri.area.area);
    console.log(visitedCountrysHandler)
    return (
        <div className={`countri ${visited && 'country-visited'}`}>
            <img className='flag' src={countri.flags.flags.png} alt={countri.flags.flags.alt} />
            <h3>Name : {countri.name.common}</h3>
            <p>Population : {countri.population.population}</p>
            <p>Region : {countri.region.region}</p>
            <h4>Capital : {countri.capital.capital}</h4>
            <p>Area : {countri.area.area} {countri.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Countri;