// familySizeReducer.js
const familySizeReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_FAMILY_SIZE_DATA':
        // Return the current state or any initial state for the loading state
        return state;
      case 'FETCH_FAMILY_SIZE_DATA_SUCCESS':
        // Update the state with the fetched data
        return action.payload;
      case 'FETCH_FAMILY_SIZE_DATA_FAILURE':
        // Handle any error state or return the current state
        return state;
      default:
        return state;
    }
  };
  
  export default familySizeReducer;
  