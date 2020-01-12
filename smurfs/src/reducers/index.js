import axios from 'axios'

const initialState = axios.get('http://localhost:3333/smurfs').then(res=>{
    console.log(res.data)
    return res.data
})


const smurfsReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default smurfsReducer



