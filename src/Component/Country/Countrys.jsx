import React, { use } from 'react';
import Countri from './Contri/Countri';

const Countrys = ({countrysPromise}) => {

    const countrysData = use(countrysPromise);
    const countrys = countrysData.countries;
    console.log(countrys);

    return (
        <div>
            <h2>Countrys : {countrys.length}</h2>

            {
                countrys.map(countrys => <Countri></Countri>) 
            }
        </div>
    );
};

export default Countrys;