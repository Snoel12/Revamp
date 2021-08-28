import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import { addHabits } from "../store/goals";

const _AddHabitsButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [freqName, setFreqName] = useState("");
  const [repName, setRepName] = useState("");
  const [durationName, setDurationName] = useState("");
  console.log(props);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const { user, addGoal, goal, addHabit } = props;

  const handleSubmit = () => {
    addHabit(user, freqName, repName, durationName, goalName, goal.id);
  };

  return (
    <>
      <div className="goals-add-button">
        <button className="add-button" onClick={openModal}>
          <img src="images/add.png" />
        </button>
        add new Habit
      </div>
      <Modal open={showModal} onClose={closeModal} center>
        <div className="modal-content-container">
          <div className="modal-title">Add A New Habit</div>

          <div className="input-section">
            <div>
              <label htmlFor="createGoal">Enter Habit Name</label>
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
            <div>
              <label htmlFor="repetitons">Enter Habit Repetitions</label>
              <input
                name="repetions"
                type="text"
                className="goal-text"
                onChange={(e) => {
                  setRepName(e.target.value);
                  console.log(repName);
                }}
              />
            </div>
            <div>
              <label htmlFor="frequency">Enter Habit Frequency</label>
              <input
                name="frequency"
                type="text"
                className="goal-text"
                onChange={(e) => {
                  setFreqName(e.target.value);
                  console.log(freqName);
                }}
              />
            </div>
            <div>
              <label htmlFor="duration">Enter Habit Duration</label>
              <input
                name="duration"
                type="text"
                className="goal-text"
                onChange={(e) => {
                  setDurationName(e.target.value);
                  console.log(durationName);
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
    addHabit: (user, frequency, repetitions, duration, Habitname, goal) =>
      dispatch(
        addHabits(user, frequency, repetitions, duration, Habitname, goal)
      ),
  };
};

export const AddHabitsButton = connect(mapState, mapDispatch)(_AddHabitsButton);
