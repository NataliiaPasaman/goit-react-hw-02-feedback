import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import css from 'components/FeedbackWidget/FeedbackWidget.module.css';

/**Застосунок повинен відображати кількість зібраних відгуків для кожної категорії.
Застосунок не повинен зберігати статистику відгуків між різними сесіями (оновлення сторінки).
*/

export class FeedbackWidget extends Component {
  constructor({ feedback }) {
    super({ feedback });
    this.state = feedback;
  }

  addFeedbackGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addFeedbackNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  addFeedbackBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  ///////////////////////////////////////////////////////////////////////////
  show() {
    console.log(this.state);
  }

  render() {
    this.show();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.addFeedbackGood}>good</button>
        <button type="button" onClick={this.addFeedbackNeutral}>neutral</button>
        <button type="button" onClick={this.addFeedbackBad}>bad</button>
      </div>
    );
  }
}

FeedbackWidget.propypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}