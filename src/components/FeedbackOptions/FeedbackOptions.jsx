import React from "react";
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.container__feedback}>
        <button type="button" 
          className={css.btn__feedback}
          name='good' 
          onClick={onLeaveFeedback}>Good</button>
        <button type="button" 
          className={css.btn__feedback}
          name='neutral' 
          onClick={onLeaveFeedback}>Neutral</button>
        <button type="button" 
          className={css.btn__feedback}
          name='bad' 
          onClick={onLeaveFeedback}>Bad</button>
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