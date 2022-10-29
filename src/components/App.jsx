import { Component } from 'react';
import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { Statistics } from './Statistics/Statistics';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
      return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    
    const positivePercentage = Number(((good * 100) / total).toFixed());
    return positivePercentage;
  }

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
        <Statistics 
        feedback={this.state} 
        totalFeedback={this.countTotalFeedback}
        goodPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

/**Виконай рефакторинг застосунку. Стан застосунку повинен залишатися у 
 * кореневому компоненті <App>.

Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} 
bad={} total={} positivePercentage={}>.
Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
Створи компонент <Section title="">, який рендерить секцію із заголовком і дітей (children). 
Обгорни кожен із <Statistics> і <FeedbackOptions> у створений компонент секції. */