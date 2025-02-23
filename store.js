function createStore(reducer) {
    let state;
    function getState() {
        return state
    }
    
    function dispatch(action) {
        state = reducer(state, action)
    }
    
    return {
        getState,
        dispatch
    }
}

export default createStore


/*=====================================
after redux tollkit
=======================================*/

function configStore(reducers) {
    let state = {}; // Initialize state as an empty object
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = Object.keys(reducers).reduce((newState, key) => {
        newState[key] = reducers[key](state[key], action);
        return newState;
      }, {});
    };
  
    return {
      getState,
      dispatch,
    };
  }
  
  