import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ feedback, totalFeedback, goodPercentage }) => {
  const totalFeedbacks = totalFeedback();
  const percentageOfGood = goodPercentage();
  console.log('percentageOfGood', percentageOfGood);
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedbacks}</li>
        {/* {percentageOfGood ? <li>Positive feedback: {percentageOfGood}%</li> : '0'} */}
        <li>Positive feedback: {percentageOfGood}%</li>
      </ul>
    </>
  );
}


Statistics.propypes = {
  feedback: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
  }),
  totalFeedback: PropTypes.func.isRequired,
  goodPercentage: PropTypes.func.isRequired,
}
