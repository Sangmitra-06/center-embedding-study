import React from 'react';

const SentenceDisplay = ({ sentence, complexityLevel, onContinue }) => {
  return (
    <div className="sentence-display">
      <h2>Complexity Level {complexityLevel}</h2>
      <div className="sentence-container">
        <p className="sentence">{sentence}</p>
      </div>
      <p className="instruction">
        Please read the sentence carefully. When you're ready to answer questions about it, click Continue.
      </p>
      <button className="continue-button" onClick={onContinue}>
        Continue to Questions
      </button>
    </div>
  );
};

export default SentenceDisplay;