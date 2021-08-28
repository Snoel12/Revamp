import React, { useState } from "react";
import { connect } from "react-redux";
import { AddGoalsButton } from "./AddGoalsButton";
import { deleteGoals } from "../store/goals";
import { EditGoalsButton } from "./EditGoalsButton";
import { ShowHabits } from "./ShowHabits";

const _Goals = (props) => {
  const { goals, user, deleteGoal } = props;
  const [habit, setHabit] = useState("");

  return (
    <div className="grid-container">
      <div className="nav-container">
        <div className="nav-container-title">Revamp</div>
        <div className="goals-container">
          <div className="goals-container-header">
            <div className="goals-title-section">Goals</div>
            <AddGoalsButton />
          </div>
          {goals.length &&
            goals.map((goal, idx) => {
              return (
                <div className="goals-row" key={goal.id}>
                  <div className="goals-name">
                    {" "}
                    <button
                      onClick={() => {
                        setHabit(goal.name);
                        console.log(habit);
                      }}
                    >
                      {goal.name}
                    </button>{" "}
                  </div>
                  <div className="goals-actions">
                    <EditGoalsButton goal={goal} />
                    <button onClick={() => deleteGoal(user, goal.id)}>
                      <img src="images/delete.png" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="main-container">
        <div className="main-container-header">
          <div className="header-items">My Habits</div>
          <div className="header-items">History</div>
          <div className="header-items">hi username</div>
        </div>
        {habit === "" ? null : (
          <div className="habits-parent-container">
            <ShowHabits goal={goals.filter((a) => a.name === habit)} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    goals: state.goals || [],
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteGoal: (user, itemId) => dispatch(deleteGoals(user, itemId)),
  };
};

export const Goals = connect(mapState, mapDispatch)(_Goals);
