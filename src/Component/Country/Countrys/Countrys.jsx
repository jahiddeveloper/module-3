import React, { use, useState } from "react";
import Countri from "../Contri/Countri";
import "./countrys.css";

const Countrys = ({ countrysPromise }) => {
  const [visitedCountrys, setVisitedCountrys] = useState([]);

  const visitedCountrysHandler = () => {
    console.log("VisitedCountrys button Clicked.");
  };

  const countrysData = use(countrysPromise);
  const countrys = countrysData.countries;
  console.log(countrys);

  return (
    <div className="countrys">
      <h2>Countrys : {countrys.length}</h2>
      <h3>Total Countrys Visited :</h3>

      {countrys.map((countri) => (
        <Countri countri={countri}
        visitedCountrysHandler = {visitedCountrysHandler}        
        ></Countri>
      ))}
    </div>
  );
};

export default Countrys;
