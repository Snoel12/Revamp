import axios from "axios";

//ACTION TYPES
const GET_GOALS = "GET_GOALS";
const ADD_GOALS = "ADD_GOALS";
const UPDATE_GOALS = "UPDATE_GOALS";

//ACTION CREATORS
const _getGoals = (goals) => {
  return {
    type: GET_GOALS,
    goals,
  };
};

const _addGoals = (goals) => {
  return {
    type: ADD_TO_GOALS,
    goals,
  };
};

const _updateGoals = (goals) => {
  return {
    type: UPDATE_GOALS,
    goals,
  };
};

//ACTION THUNKS

export const getGoals = (user) => {
  return async (dispatch) => {
    let res = await axios.get(`/api/goals/users/${user.id}`);

    let goals = res.data;

    dispatch(_getGoals(goals));
  };
};

export const deleteGoals = () => async (dispatch) => {
  //   await axios.delete(`api/items/${itemId}`);
  //   const GOALS = await axios.get(`/api/orders/GOALSs/${userId}`);
  dispatch(_deleteGOALS(goals.data));
};

export const createGoals = (user) => async (dispatch) => {
  //   const res = { inProgress: true, userId: user };
  //   const GOALS = await axios.post("/api/orders", res);
  dispatch(_addToGOALS(goals));
};

export const updateGoals = (goals) => async (dispatch) => {
  // const res = await axios.put(`/api/goals/${id}`, goals);
  // const goals = res.data;
  dispatch(_updateGoals(goals));
};

//Reducer
export const goalsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GOALS:
      return action.goals;

    case ADD_GOALS:
      return action.goals;
    case UPDATE_GOALS:
      return action.goals;

    default:
      return state;
  }
};
