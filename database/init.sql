CREATE DATABASE center_embedding_study;

\c center_embedding_study;

CREATE TABLE participants (
  id UUID PRIMARY KEY,
  demographics JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  participant_id UUID REFERENCES participants(id),
  complexity_level INTEGER NOT NULL,
  sentence_id VARCHAR(255) NOT NULL,
  question_id INTEGER NOT NULL,
  question_type VARCHAR(100) NOT NULL,
  answer TEXT,
  question_start_time TIMESTAMP NOT NULL,
  question_end_time TIMESTAMP NOT NULL,
  response_time_ms INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_participant_responses ON responses(participant_id);
CREATE INDEX idx_complexity_level ON responses(complexity_level);
CREATE INDEX idx_question_type ON responses(question_type);