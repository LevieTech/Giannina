// patients.reducer.js
const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PATIENTS_SUCCESS':
      return { ...state, data: action.payload, isLoading: false, error: null };
    case 'FETCH_PATIENTS_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default patientsReducer;

