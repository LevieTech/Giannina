import React from 'react';
import { useHistory } from 'react-router-dom';

function EachTrip({trip}) {
        const history = useHistory()

        const setTrip = (trip) => {
            console.log('setTrip', trip.id);
            history.push(`details/${trip.id}`)
        }

    return(

<div>






</div>//ends first div



    )
}

export default EachTrip;