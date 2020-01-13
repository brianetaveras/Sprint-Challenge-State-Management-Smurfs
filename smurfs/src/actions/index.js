export const getSmurfs = (data) =>{
    return {
        type: "GET_SMURFS",
        payload: data
    }
}

export const addSmurf = (data) => {
    return {
        type: "ADD_SMURF",
        payload: data
    }
}