import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import { updateGoals } from "../store/goals";

const _EditGoalsButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [goalName, setGoalName] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const { user, updateGoal, goal } = props;
  console.log(goal);

  const handleSubmit = () => {
    updateGoal(user, goalName, goal.id);
  };

  return (
    <>
      <button className="add-button" onClick={openModal}>
        <img src="images/edit.png" className="editGoals" />
      </button>
      <Modal open={showModal} onClose={closeModal} center>
        <div className="modal-content-container">
          <div className="modal-title">Edit Goal</div>

          <div className="input-section">
            <div>
              <label htmlFor="createGoal">Edit</label>
              <input
                name="createGoal"
                type="text"
                className="goal-text"
                onChange={(e) => {
                  setGoalName(e.target.value);
                  console.log(goalName);
                }}
              />
            </div>
            <div className="goal-button-container">
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateGoal: (user, goal, id) => dispatch(updateGoals(user, goal, id)),
  };
};

export const EditGoalsButton = connect(mapState, mapDispatch)(_EditGoalsButton);
