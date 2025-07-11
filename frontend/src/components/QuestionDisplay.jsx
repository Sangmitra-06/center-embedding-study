import React, { useState, useEffect } from 'react';
import { useTimer } from '../hooks/useTimer.js';

const QuestionDisplay = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  complexityLevel,
  sentence 
}) => {
  const [answer, setAnswer] = useState('');
  const { startTimer, stopTimer, resetTimer } = useTimer();

  useEffect(() => {
    resetTimer();
    startTimer();
    console.log('Timer started for question:', question.id);
    
    return () => {
      resetTimer();
    };
  }, [question.id, resetTimer, startTimer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim()) {
      const responseTime = stopTimer();
      console.log('Response time calculated:', responseTime);
      
      const answerData = {
        questionId: question.id,
        questionType: question.type,
        answer: answer.trim(),
        responseTime: Math.round(responseTime), // Round to integer
        questionStartTime: performance.timeOrigin + (performance.now() - responseTime),
        questionEndTime: performance.timeOrigin + performance.now()
      };
      
      console.log('Sending answer data:', answerData);
      onAnswer(answerData);
      setAnswer('');
    }
  };

  return (
    <div className="question-display">
      <div className="question-header">
        <h3>Complexity Level {complexityLevel}</h3>
        <p className="question-counter">
          Question {questionNumber} of {totalQuestions}
        </p>
      </div>
      
      <div className="sentence-reference">
        <h4>Sentence:</h4>
        <div className="sentence-container">
          <p className="sentence">{sentence}</p>
        </div>
      </div>
      
      <div className="question-container">
        <h4 className="question-text">{question.question}</h4>
        
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer here..."
            className="answer-input"
            required
          />
          
          <button type="submit" className="submit-answer-button">
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionDisplay;