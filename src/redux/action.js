export const SET_USERNAME = 'SET_USERNAME';

// export const fetchUsername = username => dispatch => {
    
// }
export const fetchUsername = (name) => async (dispatch) => {
    console.log('masuk action', name);
    // your action
    // dispatch({
    //     type: SET_USERNAME, 
    //     payload: name
    // })
  }