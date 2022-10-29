import React from "react";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        <button type="button" name='good' onClick={onLeaveFeedback}>good</button>
        <button type="button" name='neutral' onClick={onLeaveFeedback}>neutral</button>
        <button type="button" name='bad' onClick={onLeaveFeedback}>bad</button>
      </div>
    );
  
}

FeedbackOptions.propypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}