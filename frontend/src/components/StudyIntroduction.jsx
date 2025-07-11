import React from 'react';

const StudyIntroduction = ({ onStart }) => {
  return (
    <div className="study-introduction">
      <h1>Sentence Comprehension Study</h1>
      
      <div className="instructions">
        <h2>What to Expect in This Study</h2>
        
        <p>You will be presented with sentences that scale with complexity. For example, complexity level 1 would look like "The cat that the dog chased meowed." For complexity level 2, it might be "The cat that the dog that the boy adopted chased meowed" and so on until complexity level 6.</p>
        
        <p>You will be presented with one sentence for each complexity level, and adjoining will be 6 questions related to that sentence. </p>
        
        <p>Each question type is designed to assess different aspects of your comprehension of these complex sentence structures, ranging from basic identification to understanding intricate relationships between multiple entities.</p>
        
        <div className="important-note">
          <h3>Important:</h3>
          <ul>
            <li>Your response time for each question will be recorded</li>
            <li> Please complete the form in one sitting</li>
            <li>Please read each sentence carefully before answering</li>
            <li>Answer as accurately as possible</li>
            <li>The study will take approximately 15-20 minutes</li>
          </ul>
        </div>
      </div>
      
      <button className="start-button" onClick={onStart}>
        Start Study
      </button>
    </div>
  );
};

export default StudyIntroduction;