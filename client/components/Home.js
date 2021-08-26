import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, quotes } = props;
  console.log(quotes);

  return (
    <div>
      <div>
        <h3>Hey {username}, welcome to Revamp!</h3>
        <h3> Where our main project is you</h3>
      </div>
      <div>
        {quotes.map((quote) => {
          return (
            <div className="quote-container" key={quote.id}>
              <ul className="quote-list">
                <li>
                  {quote.text} - {quote.author}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="revamp-commandments">
        <h3>The 10 I`s to ask before Revamping yourself</h3>
        <ul>
          <li>
            <strong>ARE THERE SMALL ACTIONS I CAN TAKE RIGHT NOW? </strong>
          </li>
          <li>
            <strong>AM I WILLING TO COMMIT TO THIS FOR A MONTH?</strong>
          </li>
          <li>
            <strong>IF I DO THIS EVERY DAY, WHAT CHANGE WILL RESULT?</strong>
          </li>
          <li>
            <strong>DOES THIS HAVE MAJOR MEANING IN MY LIFE?</strong>
          </li>
          <li>
            <strong>
              DOES THE PAIN OF NOT DOING IT OUTWEIGH THE FEAR OF DOING IT?
            </strong>
          </li>
          <li>
            <strong>CAN I MAKE THIS A TWO- OR FIVE-MINUTE ACTION?</strong>
          </li>
          <li>
            <strong>WHEN WILL I CARVE OUT TIME?</strong>
          </li>
          <li>
            <strong>HOW CAN I HOLD MYSELF ACCOUNTABLE?</strong>
          </li>
          <li>
            <strong>CAN I GIVE MYSELF EARLY SMALL SUCCESSES?</strong>
          </li>
          <li>
            <strong>HOW WILL I MAKE SURE NOT TO FORGET?</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    quotes: state.quotes,
  };
};

export default connect(mapState)(Home);
