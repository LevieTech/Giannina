
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function TripList () {
    // const { tripUser } = useSelector((store)=> store.trip);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

   
  useEffect(() => {
    dispatch({ type: "" });
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
export default TripList;


