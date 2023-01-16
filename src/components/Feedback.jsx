import { useState } from 'react';
import css from './Feedback.module.css'
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

 export default function Feedback () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
    const leaveFeedback = event => {
      const button = event.target.name;
      switch (button) {
        case 'good': 
          setGood(pr => pr + 1);
          break;
          case 'neutral': 
          setNeutral(pr => pr + 1);
            break;
            case 'bad': 
          setBad(pr => pr + 1);
          break;
        default:
          return;
      }
    };
  
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
  
    const countPositiveFeedbackPercentage = () => {
      return Math.floor(
        (good * 100) /
          (good + neutral + bad)
      );
    };
  
      return (
        <div className={css.feedback}>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={leaveFeedback}/>
          </Section>
  
          <Section title="Statistics">
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <p>No feedback given.</p>
            )};
          </Section>
        </div>
      );
            }
           