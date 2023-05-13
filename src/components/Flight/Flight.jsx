import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useState} from "react";

function Flight () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [flightInfo, setFlightInfo] = useState({
        guestName:"",
        departure: "",
        arrivalDate: "",
        fromCity: "",
        toCity:"",
        arline:"",
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
    

    return(

<div>
<h2>Flight Info</h2>
<form onSubmit={handleSubmit}>
        <label htmlFor="departure">Departure Time:</label>
        <input type="text" id="departure" name="departure" value={flightInfo.departure} onChange={handleInputChange} />

        <label htmlFor="arrival">Arrival Time:</label>
        <input type="text" id="arrival" name="arrival" value={flightInfo.arrival} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}






    
export default Flight;