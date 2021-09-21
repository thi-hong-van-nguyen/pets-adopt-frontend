import { FETCH_DOGS_START, FETCH_DOGS_SUCCESS } from "../actions";

const initialState = {
    isLoading: false,
    dogs: []
}

const dogReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOGS_START:
            return ({
                ...state,
                isLoading: true,
                dogs: []
            })
        case FETCH_DOGS_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                dogs: action.payload
            })
        default:
            return state;
    }
};

export default dogReducer;