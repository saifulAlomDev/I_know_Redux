

/*=====================================
after redux toolkit
=======================================*/
// Define the createSlice function
const createSlice = ({ name, initialState, reducer }) => {
    // Create action creators
    const actions = Object.keys(reducer).reduce((acc, key) => {
        const type = `${name}/${key}`;
        acc[key] = (payload) => ({ type, payload });
        return acc;
    }, {});

    // Create the reducer function
    const sliceReducer = (state = initialState, action) => {
        const actionType = action.type?.split("/")[1]; // Added optional chaining
        if (actionType && reducer[actionType]) {
            return reducer[actionType](state, action);
        }
        return state;
    };

    return {
        actions,
        reducer: sliceReducer
    };
};



export default createSlice
