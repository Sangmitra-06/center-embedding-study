import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import StudyIntroduction from './components/StudyIntroduction';
import SentenceDisplay from './components/SentenceDisplay';
import QuestionDisplay from './components/QuestionDisplay';
import ProgressBar from './components/ProgressBar';
import CompletionPage from './components/CompletionPage';

import { studyData } from './data/sentences';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [phase, setPhase] = useState('introduction'); // introduction, sentence, questions, complete
  const [participantId, setParticipantId] = useState(null);
  const [currentComplexityIndex, setCurrentComplexityIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const currentSentenceData = studyData[currentComplexityIndex];
  const currentQuestion = currentSentenceData?.questions[currentQuestionIndex];
  const totalQuestions = studyData.reduce((total, level) => total + level.questions.length, 0);
  const completedQuestions = responses.length;

  const createParticipant = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/study/participant`, {
        demographics: {} // Add demographics collection if needed
      });
      return response.data.participantId;
    } catch (error) {
      console.error('Error creating participant:', error);
      return null;
    }
  };

  const saveResponse = async (responseData) => {
    try {
      await axios.post(`${API_URL}/api/study/response`, {
        participantId,
        complexityLevel: currentSentenceData.complexityLevel,
        sentenceId: currentSentenceData.sentenceId,
        ...responseData
      });
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };

  const handleStartStudy = async () => {
    const newParticipantId = await createParticipant();
    if (newParticipantId) {
      setParticipantId(newParticipantId);
      setPhase('sentence');
    }
  };

  const handleSentenceContinue = () => {
    setPhase('questions');
  };

  const handleAnswer = async (answerData) => {
    // Save response to backend
    await saveResponse(answerData);
    
    // Update local state
    setResponses(prev => [...prev, answerData]);

    // Move to next question or sentence
    if (currentQuestionIndex < currentSentenceData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Move to next complexity level
      if (currentComplexityIndex < studyData.length - 1) {
        setCurrentComplexityIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
        setPhase('sentence');
      } else {
        // Study complete
        setPhase('complete');
      }
    }
  };

  const renderCurrentPhase = () => {
    switch (phase) {
      case 'introduction':
        return <StudyIntroduction onStart={handleStartStudy} />;
      
      case 'sentence':
        return (
          <SentenceDisplay
            sentence={currentSentenceData.sentence}
            complexityLevel={currentSentenceData.complexityLevel}
            onContinue={handleSentenceContinue}
          />
        );
      
      case 'questions':
        return (
          <QuestionDisplay
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={currentSentenceData.questions.length}
            onAnswer={handleAnswer}
            complexityLevel={currentSentenceData.complexityLevel}
            sentence={currentSentenceData.sentence} 
          />
        );
      
      case 'complete':
        return <CompletionPage participantId={participantId} />;
      
      default:
        return <StudyIntroduction onStart={handleStartStudy} />;
    }
  };

  return (
    <div className="App">
      {(phase === 'questions' || phase === 'sentence') && (
        <ProgressBar
          current={completedQuestions}
          total={totalQuestions}
          label="Study Progress"
        />
      )}
      
      <main className="main-content">
        {renderCurrentPhase()}
      </main>
    </div>
  );
}

export default App;