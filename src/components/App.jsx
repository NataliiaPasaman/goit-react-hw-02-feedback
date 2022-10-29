import { Component } from 'react';
import { FeedbackWidget } from 'components/FeedbackWidget/FeedbackWidget.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackWidget
          feedback={this.state}
          addGood={this.addFeedbackGood}
          addNeutral={this.addFeedbackNeutral}
          addBad={this.addFeedbackBad}
        />
        <Statistics feedback={this.state} />
      </div>
    );
  }
}


/** Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше 
 * статистики про зібрані відгуки. 
 * Додай відображення загальної кількості зібраних відгуків з усіх категорій та
 * відсоток позитивних відгуків. Для цього створи допоміжні методи countTotalFeedback()
 *  і countPositiveFeedbackPercentage(), які підраховують ці значення, ґрунтуючись 
 * на даних у стані (обчислювані дані). */