import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/FeedbackWidget.module.css';

export const FeedbackWidget = ({ feedback, addGood, addNeutral, addBad }) => {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button className={css.button} type="button" onClick={addGood}>good</button>
        <button className={css.button} type="button" onClick={addNeutral}>neutral</button>
        <button className={css.button} type="button" onClick={addBad}>bad</button>
      </div>
    );
  
}

FeedbackWidget.propypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    addGood: PropTypes.func.isRequired,
    addNeutral: PropTypes.func.isRequired,
    addBad: PropTypes.func.isRequired,
}