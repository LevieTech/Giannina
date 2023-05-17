
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function MyTrips () {
    const dispatch = useDispatch();
    const trips = useSelector((store) => store.trips);


  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);
    
    
    
    
    return(
<div>
{/* {trips.map((trip) => {
            return 
            <EachTrip key={trip.id} trip={trip} />;
          })} */}
<h2>My Trips!</h2>








</div>//first  div



    )
}
export default MyTrips


