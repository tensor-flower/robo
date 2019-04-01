import { CHANGE_SEARCHFIELD,
    REQUEST_SUCCESS,REQUEST_PENDING,REQUEST_FAILED } from "./constants";

const initialStateSearch = {
    searchField:""
}
//reducer is a pure function that 
//takes the previous state and an action
//and returns the next state.
export const searchRobots = (state=initialStateSearch, action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state,{searchField:action.payload}); 
        default:
            return state;
    }
}

const initialStateRobot = {
    isPending:false,
    robots:[],
    err: ''
}

export const requestRobots = (state=initialStateRobot,action={})=>{
    switch(action.type){
        case REQUEST_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUEST_SUCCESS:
            return Object.assign({},state,
                {isPending:false,robots:action.payload})
        case REQUEST_FAILED:
            return Object.assign({},state,
                {isPending:false,err:action.payload})
        default:
            return state;
    }
}