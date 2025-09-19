import React, { use } from 'react';
import Countri from '../Contri/Countri';
import './countrys.css'

const Countrys = ({countrysPromise}) => {

    const countrysData = use(countrysPromise);
    const countrys = countrysData.countries;
    console.log(countrys);

    return (
        <div className='countrys'>
            <h2>Countrys : {countrys.length}</h2>

            {
                countrys.map(countri => <Countri countri = {countri}></Countri>) 
            }
        </div>
    );
};

export default Countrys;