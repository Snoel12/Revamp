import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import { getQuote } from "./store/quotes";
import { getGoals } from "./store/goals";
import { Food } from "./components/food/Food";

//importing components
import { Goals } from "./components/Goals";
import { Registration } from "./components/Registration";

/**
 * COMPONENT
 */
const Routes = (props) => {
  useEffect(() => {
    props.loadInitialData();
    props.getQuote();
    const { user } = props;
    if (user.id) {
      props.getGoals(user);
    }
  }, [props.goals.length, props.user.id]);

  const { isLoggedIn } = props;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/nutrition" component={Food} />
          </Switch>
        </div>
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
        </Switch>
      )}
    </div>
  );
};
// }

/**
 * CONTAINER
 */
const mapState = (state, history) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    user: state.auth,
    quotes: state.quotes || {},
    goals: state.goals || {},
    history,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    getQuote: () => dispatch(getQuote()),
    getGoals: (user) => dispatch(getGoals(user)),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
