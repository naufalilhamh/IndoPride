import { SET_USERNAME } from './action'

const initialState = {
    username: ''
}

function userReducer(state = initialState, action){
    console.log('masuk reducer = ');
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state, 
                username: action.payload
            }
        default:
            return state
    }
}

export default userReducer