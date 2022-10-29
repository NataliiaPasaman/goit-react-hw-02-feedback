import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/FeedbackWidget.module.css';

export const FeedbackWidget = ({ feedback, addFeedback }) => {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button className={css.button} type="button" name='good' onClick={addFeedback}>good</button>
        <button className={css.button} type="button" name='neutral' onClick={addFeedback}>neutral</button>
        <button className={css.button} type="button" name='bad' onClick={addFeedback}>bad</button>
      </div>
    );
  
}

FeedbackWidget.propypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    addFeedback: PropTypes.func.isRequired,
}