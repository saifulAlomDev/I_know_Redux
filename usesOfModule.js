/*
====================== Before Redux Toolkit ==============
====================== Normal Operation ==================

import createStore from './module.js';

// Action creators
const add = (data) => ({ type: "counter/add", payload: data });
const sub = (data) => ({ type: "counter/minus", payload: data });

// Initial state
const initialState = 555;

// Reducer function
function reducer(state = initialState, action) {
    switch (action.type) {
        case "counter/add":
            return state + action.payload;
        case "counter/minus":
            return state - action.payload;
        default:
            return state;
    }
}

// Create store with reducer
const store = createStore(reducer);

// Dispatch actions
store.dispatch(sub(1000));
console.log(store.getState()); // Output the current state
store.dispatch(add(445));
console.log(store.getState()); // Output the current state
*/





/*=====================================
after redux toolkit
=======================================*/


import createSlice from "./createSlice.js";
import createStore from "./store.js";


// Configuration for the counter slice
const counterConfig = {
    name: "counter",
    initialState: 0,
    reducer: {
        add: (state, action) => state + action.payload,
        sub: (state, action) => state - action.payload,
    },
};

const counterSlice = createSlice(counterConfig);
const { add, sub } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

const store = createStore(counterReducer);

console.log(store.getState());

// Example usage of actions
store.dispatch(add(5));
console.log(store.getState());

store.dispatch(sub(2));
console.log(store.getState());
console.log(counterConfig.initialState)