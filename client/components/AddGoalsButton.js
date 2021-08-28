import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import { addGoals } from "../store/goals";

const _AddGoalsButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [goalName, setGoalName] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const { user, addGoal } = props;

  const handleSubmit = () => {
    addGoal(user, goalName);
  };

  return (
    <>
      <div className="goals-add-button">
        <button className="add-button" onClick={openModal}>
          <img src="images/add.png" />
        </button>
        add new goal
      </div>
      <Modal open={showModal} onClose={closeModal} center>
        <div className="modal-content-container">
          <div className="modal-title">Create A New Goal</div>

          <div className="input-section">
            <div>
              <label htmlFor="createGoal">Enter a goal name</label>
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
    addGoal: (user, goal) => dispatch(addGoals(user, goal)),
  };
};

export const AddGoalsButton = connect(mapState, mapDispatch)(_AddGoalsButton);
