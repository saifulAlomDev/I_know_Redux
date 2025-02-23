const createAsyncThunk = (identifier, asyncFunction) => {
    const PENDING_TYPE = `${identifier}/PENDING`;
    const SUCCESS_TYPE = `${identifier}/SUCCESS`;
    const REJECTED_TYPE = `${identifier}/REJECTED`;

    const pending = () => ({ type: PENDING_TYPE });
    const fulfilled = (data) => ({ type: SUCCESS_TYPE, payload: data });
    const rejected = (error) => ({ type: REJECTED_TYPE, payload: error });

    const thunk = () => async (dispatch) => {
            dispatch(pending());
        try {
            const data = await asyncFunction();
            dispatch(fulfilled(data));
        } catch (error) {
            dispatch(rejected(error));
        }
    };

    return thunk;
};


function createSlice({ name, initialState, reducer, extrrareducer }) {

    const createBuilder = () => {
        const cases = {}
        return {
            addcase: (actionType, caseReducer) => {
                cases[actionType] = caseReducer
            },
            getCases: () => cases
        }
    }

    const builder = createBuilder()
    extrrareducer: (builder)
}
