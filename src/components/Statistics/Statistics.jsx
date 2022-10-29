import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  const totalFeedbacks = totalFeedback();
  const goodPercentage = positivePercentage();
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedbacks}</li>
        <li>Positive feedback: {goodPercentage || 0}%</li>
      </ul>
    </>
  );
};

Statistics.propypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  goodPercentage: PropTypes.func.isRequired,
};
