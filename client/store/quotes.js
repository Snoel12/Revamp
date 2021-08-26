import axios from "axios";

//ACTION TYPES
const GET_QUOTE = "GET_QUOTE";
const ADD_QUOTE = "ADD_QUOTE";

//ACTION CREATORS
const _getQuote = (quote) => {
  return {
    type: GET_QUOTE,
    quote,
  };
};

const _addQuote = (Quote) => {
  return {
    type: ADD_TO_QUOTE,
    Quote,
  };
};

//ACTION THUNKS

//to get our quotes
export const getQuote = () => {
  return async (dispatch) => {
    let res = await axios.get(`/api/quotes`);

    let quote = res.data;

    dispatch(_getQuote(quote));
  };
};

//to delete some quotes
export const deleteQuote = (itemId, userId) => async (dispatch) => {
  await axios.delete(`api/items/${itemId}`);
  const Quote = await axios.get(`/api/orders/Quotes/${userId}`);
  dispatch(_deleteQuote(Quote.data));
};

//to create new quotes
export const createQuote = (user) => async (dispatch) => {
  const res = { inProgress: true, userId: user };
  const Quote = await axios.post("/api/orders", res);
  dispatch(_addToQuote(Quote));
};

//Reducer
export const quoteReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUOTE:
      return action.quote;

    case ADD_QUOTE:
      return action.quote;

    default:
      return state;
  }
};
