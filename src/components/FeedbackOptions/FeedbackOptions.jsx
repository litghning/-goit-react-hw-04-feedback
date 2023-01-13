import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div>
      <button type="button" name = "good" onClick={onLeaveFeedback} className={css.feedbackButton}>Good</button>
      <button type="button" name = "neutral" onClick={onLeaveFeedback} className={css.feedbackButton}>Neutral</button>
<button type="button" name = "bad" onClick={onLeaveFeedback} className={css.feedbackButton}> Bad</button>
    </div>
  );
  
  FeedbackOptions.prototype = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;
