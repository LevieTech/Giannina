import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useState} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
function Flight () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((store) => store);
 
  const [flightInfo, setFlightInfo] = useState({
        guestName:"",
        departureDate: "",
        arrivalDate: "",
        fromCity: "",
        toCity:"",
        airline:"",
        flightNumber:"",
        departTime:"",
        arriveTime:""

      });

  useEffect(()=> {
    if (id) {
      const data = {userID:id, id:user.id};
    }
  }, [dispatch, id, user.id]);
  
  

      const handleInputChange = (event) => {
        setFlightInfo({
          ...flightInfo,
          [event.target.name]: event.target.value
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "SAVE_FLIGHT_INFO", payload: flightInfo });
        history.push("/");
      };
      const handleDelete = () => {
        dispatch({ type: "DELETE_FLIGHT_INFO", payload: id });
        history.push("/");
        };
        
        const handleEdit = () => {
        dispatch({ type: "EDIT_FLIGHT_INFO", payload: { id, flightInfo } });
        history.push("/");
        };

    return(

<div>
<h2>Flight Info</h2>
<form onSubmit={handleSubmit}>
<div className="form-textfield" />

<TextField
label htmlFor="guestName"
type="text" id="gurestName" 
name="guestName" 
value={flightInfo.guestName} 
onChange={handleInputChange} 
/>

<TextField
label htmlFor="departureDate"
type="date" 
id="departureDate" 
name="departureDate" 
value={flightInfo.departureDate} 
onChange={handleInputChange} 
/>

<TextField
label htmlFor="arrivalDate"
type="date" 
id="arrivalDate" 
name="arrivalDate" 
value={flightInfo.arrival} 
onChange={handleInputChange} 
/>
<TextField
label htmlFor="fromCity"
type="text" 
id="fromCity" 
name="fromCity" 
value={flightInfo.fromCity} 
onChange={handleInputChange} 
/> 
<TextField      
label htmlFor="toCity"
type="text" 
id="toCity" 
name="toCity" 
value={flightInfo.toCity} 
onChange={handleInputChange} 
/>  
<TextField
label htmlFor="airline"
type="text" 
id="airline" 
name="airline" 
value={flightInfo.airline} 
onChange={handleInputChange}
/>       
<TextField
label htmlFor="flightNumber"
type="number" 
id="flightNumber" 
name="flightNumber" 
value={flightInfo.flightNumber} 
onChange={handleInputChange} 
/>    
<TextField
label htmlFor="departTime"
type="time" 
id="departTime" 
name="departTime" 
value={flightInfo.departTime} 
onChange={handleInputChange} 
/>  
<TextField
label htmlFor="arriveTime"
type="time" 
id="arriveTime" 
name="arriveTime" 
value={flightInfo.arriveTime} 
onChange={handleInputChange} 
/>


        <button type="submit">Submit</button>
        {id && (
      <>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    )}

      </form>
    </div>
   
  );
}






    
export default Flight;