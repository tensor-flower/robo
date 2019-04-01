import {CHANGE_SEARCHFIELD,
    REQUEST_SUCCESS,REQUEST_PENDING,REQUEST_FAILED} from './constants';

export const setSearchField = (text)=>({
    //text is the user input
    type: CHANGE_SEARCHFIELD,
    payload: text
});

export const requestRobots = ()=>(dispatch)=>{
    dispatch({type:REQUEST_PENDING})
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
        dispatch({type:REQUEST_SUCCESS,payload:data})
    }).catch(err=>dispatch({type:REQUEST_FAILED,payload:err}))
}