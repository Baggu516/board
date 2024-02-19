import { STARTING_REQUEST,FAILURE_REQUEST,DATA_FETCH } from "../actions/actionType";
const intialstate={
    loading:false,
    data:[],
    error:""
}
const fetchReducer=(state=intialstate,action)=>{
    switch(action.type){
        case STARTING_REQUEST : return {...state,loading:true}
        case DATA_FETCH :return {...state,data:action.payload,loading:false}
        case FAILURE_REQUEST : return {...state,loading:false,error:action.payload}
        default :return state
    }
}
export default fetchReducer