import { Component } from 'react';
import { FeedbackWidget } from 'components/FeedbackWidget/FeedbackWidget';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  addFeedback = (event) => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
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
          addFeedback={this.addFeedback}
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