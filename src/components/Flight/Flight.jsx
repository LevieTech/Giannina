import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useState} from "react";
import { useParams } from "react-router-dom";


function Flight () {
  const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
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
<label htmlFor="guestName">Guest Name:</label>
        <input type="text" id="gurestName" name="guestName" value={flightInfo.guestName} onChange={handleInputChange} />

<label htmlFor="departureDate">Departure Date:</label>
        <input type="date" id="departureDate" name="departureDate" value={flightInfo.departureDate} onChange={handleInputChange} />

<label htmlFor="arrivalDate">Arrival Date:</label>
        <input type="date" id="arrivalDate" name="arrivalDate" value={flightInfo.arrival} onChange={handleInputChange} />

<label htmlFor="fromCity">From (City):</label>
        <input type="text" id="fromCity" name="fromCity" value={flightInfo.fromCity} onChange={handleInputChange} /> 
        
<label htmlFor="toCity">To City:</label>
        <input type="text" id="toCity" name="toCity" value={flightInfo.toCity} onChange={handleInputChange} />  

<label htmlFor="airline">Airline:</label>
        <input type="text" id="airline" name="airline" value={flightInfo.airline} onChange={handleInputChange} />       

<label htmlFor="flightNumber">Flight Number:</label>
        <input type="number" id="flightNumber" name="flightNumber" value={flightInfo.flightNumber} onChange={handleInputChange} />    

<label htmlFor="departTime">Departure Time:</label>
        <input type="time" id="departTime" name="departTime" value={flightInfo.departTime} onChange={handleInputChange} />  

<label htmlFor="arriveTime">Arrival Time:</label>
        <input type="time" id="arriveTime" name="arriveTime" value={flightInfo.arriveTime} onChange={handleInputChange} />


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