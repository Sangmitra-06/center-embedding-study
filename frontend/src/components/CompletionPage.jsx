import React from 'react';

const CompletionPage = ({ participantId }) => {
  return (
    <div className="completion-page">
      <h1>Study Complete!</h1>
      <p>Thank you for participating in our center embedding comprehension study.</p>
      <p>Your responses have been recorded successfully.</p>
      <p className="participant-id">Participant ID: {participantId}</p>
      <p>You may now close this window.</p>
    </div>
  );
};

export default CompletionPage;