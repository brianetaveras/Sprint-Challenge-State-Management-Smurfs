const initialState = {
  smurfs: []
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SMURFS":
      console.log(state);
      return { smurfs: action.payload };
    case "ADD_SMURF":
      return { smurfs: action.payload };
    default:
      return state;
  }
};

export default smurfsReducer;
