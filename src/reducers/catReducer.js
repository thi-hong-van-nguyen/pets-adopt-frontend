import { FETCH_CATS_START, FETCH_CATS_SUCCESS } from "../actions";

const initialState = {
    isLoading: false,
    cats: []
}

const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATS_START:
            return ({
                ...state,
                isLoading: true,
                cats: []
            })
        case FETCH_CATS_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                cats: action.payload
            })
        default:
            return state;
    }
};

export default catReducer;