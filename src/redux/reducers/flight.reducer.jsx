const initialState = {
    flightsAll: [],
    flightsUser: [],
    
    
  };
 
 function flightReducer(state = initialState, action) {
    switch (action.type) {
      
      case "GET_USER_FLIGHTS_SUCCESS":
        return {
          ...state,
          flightsUser: action.payload,
        };
      case "GET_ALL_FLIGHTS_SUCCESS":
        return {
          ...state,
          flightsAll: action.payload,
        };
      
      case "UPDATE_FLIGHTS_SUCCESS":
        return state;
    }}

    export default flightReducer;