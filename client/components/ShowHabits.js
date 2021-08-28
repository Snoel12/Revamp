import React from "react";
import { connect } from "react-redux";
import { deleteHabits } from "../store/goals";
import { AddHabitsButton } from "./AddHabitsButton";
import { EditHabitsButton } from "./EditHabitsButton";

const _ShowHabits = (props) => {
  console.log(props);
  const { goal, user, deleteHabit } = props;
  console.log(goal[0].habits);
  const habits = goal[0].habits;
  return (
    <div className="habits-container-header">
      <div>Habits for {goal[0].name}</div>
      <AddHabitsButton goal={goal[0]} />

      <div>
        {habits.map((habit) => {
          return (
            <div key={habit.id} className="habits-row">
              <div>{habit.name}</div>
              <button onClick={() => deleteHabit(user, habit.id)}>x</button>
              <div>
                {" "}
                <EditHabitsButton habit={habit.id} goal={goal[0]} />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteHabit: (user, itemId) => dispatch(deleteHabits(user, itemId)),
  };
};
export const ShowHabits = connect(mapState, mapDispatch)(_ShowHabits);
