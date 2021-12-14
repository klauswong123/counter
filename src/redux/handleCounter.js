import { INCREMENT, DECREMENT, RESET } from "./constants"

const handleCounter = (state=0, action) =>{
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state-1;
        case RESET:
            state=0;
            return state;
        default:
            return state
    }
}

export default handleCounter