import axios from "axios";

//ACTION TYPES
const GET_GOALS = "GET_GOALS";
const ADD_GOALS = "ADD_GOALS";
const UPDATE_GOALS = "UPDATE_GOALS";
const DELETE_GOALS = "DELETE_GOALS";

//ACTION CREATORS
const _getGoals = (goals) => {
  return {
    type: GET_GOALS,
    goals,
  };
};

const _addGoals = (goals) => {
  return {
    type: ADD_GOALS,
    goals,
  };
};

const _updateGoals = (goals) => {
  return {
    type: UPDATE_GOALS,
    goals,
  };
};

const _deleteGoals = (goals) => {
  return {
    type: DELETE_GOALS,
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

export const deleteGoals = (user, itemId) => async (dispatch) => {
  await axios.delete(`api/goals/${itemId}`);
  const goals = await axios.get(`/api/goals/users/${user.id}`);
  console.log("deleted");
  dispatch(_deleteGoals(goals.data));
};

export const addGoals = (user, goal) => async (dispatch) => {
  const res = { name: goal, userId: user.id };
  const news = await axios.post("/api/goals", res);

  const goals = await axios.get(`/api/goals/users/${user.id}`);
  dispatch(_addGoals(goals.data));
};

export const updateGoals = (user, goal, id) => async (dispatch) => {
  const res = { name: goal, userId: user.id };
  console.log(res, id);
  const news = await axios.put(`/api/goals/${id}`, res);
  const goals = await axios.get(`/api/goals/users/${user.id}`);
  dispatch(_updateGoals(goals.data));
};

//habits thunks
export const deleteHabits = (user, itemId) => async (dispatch) => {
  await axios.delete(`api/habits/${itemId}`);
  const goals = await axios.get(`/api/goals/users/${user.id}`);
  console.log("deleted");
  dispatch(_deleteGoals(goals.data));
};

export const addHabits =
  (user, frequency, repetitions, duration, name, goal) => async (dispatch) => {
    const res = {
      frequency: frequency,
      repetitions: repetitions,
      duration: duration,
      name: name,
      goalId: goal,
    };
    const news = await axios.post("/api/habits", res);

    const goals = await axios.get(`/api/goals/users/${user.id}`);
    dispatch(_addGoals(goals.data));
  };

export const editHabits =
  (user, frequency, repetitions, duration, name, goal, habitId) =>
  async (dispatch) => {
    const res = {
      frequency: frequency,
      repetitions: repetitions,
      duration: duration,
      name: name,
      goalId: goal,
    };
    const news = await axios.put(`/api/habits/${habitId}`, res);

    const goals = await axios.get(`/api/goals/users/${user.id}`);
    dispatch(_addGoals(goals.data));
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
    case DELETE_GOALS:
      return action.goals;

    default:
      return state;
  }
};
