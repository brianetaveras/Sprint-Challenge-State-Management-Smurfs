
const initialState = {
    smurfs: []
}


const smurfsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_SMURfS":
           console.log(state)
           return {...state, smurfs: action.payload};
        default:
            return state
    }
}

export default smurfsReducer



