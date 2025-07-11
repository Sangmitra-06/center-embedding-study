import React from 'react';

const StudyIntroduction = ({ onStart }) => {
  return (
    <div className="study-introduction">
      <h1>Center Embedding Comprehension Study</h1>
      
      <div className="instructions">
        <h2>What to Expect in This Study</h2>
        
        <p>You will be presented with center embedding sentences that scale with complexity. For example, complexity level 1 would look like "The cat that the dog chased meowed." For complexity level 2, it might be "The cat that the dog that the boy adopted chased meowed" and so on until complexity level 6.</p>
        
        <p>You will be presented with one sentence for each complexity level, and adjoining will be 6 questions related to that sentence. The question types you will encounter are as follows:</p>
        
        <ol>
          <li><strong>Action Performed</strong> - Questions asking you to identify what action a specific entity performed in the sentence.</li>
          <li><strong>Agent Identification</strong> - Questions asking you to identify which entity was affected by another entity's action.</li>
          <li><strong>Entity Count</strong> - Questions asking you to count the total number of distinct entities present in the sentence.</li>
          <li><strong>Nested Dependency</strong> - Questions testing your understanding of the relationships between entities and their actions within the embedded sentence structure.</li>
          <li><strong>Causal Sequence</strong> - Questions asking you to identify what series of events led to a particular entity's action.</li>
          <li><strong>Chain Consequence</strong> - Questions asking you to determine the consequence or outcome of an entity's involvement in the sentence.</li>
        </ol>
        
        <p>Each question type is designed to assess different aspects of your comprehension of these complex sentence structures, ranging from basic identification to understanding intricate relationships between multiple entities.</p>
        
        <div className="important-note">
          <h3>Important:</h3>
          <ul>
            <li>Your response time for each question will be recorded</li>
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