import React, { useState } from "react";
import { connect } from "react-redux";
import { getFoods } from "../../store/nutrition";

const _Food = (props) => {
  const { getFood, food } = props;

  return (
    <button
      onClick={() => {
        getFood("cheese");
        setFood(foodState.push(food));
        console.log(foodState);
      }}
    >
      purposes
    </button>
  );
};

const mapState = (state) => {
  return {
    food: state.foods,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getFood: (food) => dispatch(getFoods(food)),
  };
};
export const Food = connect(mapState, mapDispatch)(_Food);
