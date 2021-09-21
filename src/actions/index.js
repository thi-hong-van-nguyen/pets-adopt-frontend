export const FETCH_CATS_START = "FETCH_CATS_START";
export const FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS";
export const FETCH_DOGS_START = "FETCH_DOGS_START";
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS";

const fetchCatsStart = () => ({ type: FETCH_CATS_START});
const fetchCatsSuccess = (data) => ({ type: FETCH_CATS_SUCCESS, payload: data});

const fetchDogsStart = () => ({ type: FETCH_DOGS_START});
const fetchDogsSuccess = (data) => ({ type: FETCH_DOGS_SUCCESS, payload: data})

export const fetchCats = (data) => dispatch => {
    dispatch(fetchCatsStart());
    dispatch(fetchCatsSuccess(data));
}

export const fetchDogs = (data) => dispatch => {
    dispatch(fetchDogsStart());
    dispatch(fetchDogsSuccess(data));
}