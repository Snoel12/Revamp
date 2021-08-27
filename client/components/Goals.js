import React, { Component } from "react";
import { connect } from "react-redux";

class Goals extends Component {
  render() {
    const { goals } = this.props;
    console.log(goals);

    return (
      <div className="grid-container">
        <div className="nav-container">
          <div className="nav-container-title">Revamp</div>
          <div className="goals-container">
            <div className="goals-container-header">
              <div className="goals-title-section">add a goal</div>
              <div className="goals-add-button">
                <img src="images/add.png" />
                button
              </div>
            </div>
            {goals.length &&
              goals.map((goal, idx) => {
                return (
                  <div className="goals-row" key={goal.id}>
                    <div className="goals-name"> {goal.name} </div>
                    <div className="goals-actions">
                      <img src="images/edit.png" />
                      <img src="images/delete.png" />
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
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    goals: state.goals || [],
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(Goals);
