import axios from "axios";

//API SET UP

//ACTION TYPES
const GET_FOODS = "GET_FOODS";

//ACTION CREATORS
const _getFoods = (foods) => {
  return {
    type: GET_FOODS,
    foods,
  };
};

//ACTION THUNKS

export const getFoods = (food) => {
  return async (dispatch) => {
    const params = {
      api_key: "bCybN0UX8oOyudGW3A3t3R4B36edi7W2fB5NmDxf",
      query: food,
      dataType: ["Survey (FNDDS)"],
      pagesize: 4,
    };
    let res = await axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${params.query}&pageSize=${params.pagesize}&api_key=bCybN0UX8oOyudGW3A3t3R4B36edi7W2fB5NmDxf`
    );
    // let res = await axios.get(
    //   `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${params.api_key}`
    // );

    let foods = res.data.foods;
    console.log(foods);

    dispatch(_getFoods(foods));
  };
};

//Reducer
export const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FOODS:
      return action.foods;

    default:
      return state;
  }
};
