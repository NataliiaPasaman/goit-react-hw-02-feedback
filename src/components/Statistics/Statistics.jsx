import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ feedback }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
    </>
  );
}


Statistics.propypes = {
  feedback: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
  })
}
