const pool = require('../models/database');
const { v4: uuidv4 } = require('uuid');

const createParticipant = async (req, res) => {
  try {
    console.log('Creating participant...');
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);
    
    const participantId = uuidv4();
    
    // Handle case where req.body might be undefined
    const demographics = req.body ? req.body.demographics : {};
    
    console.log('Generated participant ID:', participantId);
    console.log('Demographics:', demographics);
    
    const query = `
      INSERT INTO participants (id, demographics, created_at)
      VALUES ($1, $2, NOW())
      RETURNING id
    `;
    
    console.log('Executing query:', query);
    console.log('Query parameters:', [participantId, JSON.stringify(demographics || {})]);
    
    const result = await pool.query(query, [participantId, JSON.stringify(demographics || {})]);
    
    console.log('Query result:', result.rows);
    
    res.json({ participantId: result.rows[0].id });
  } catch (error) {
    console.error('Error creating participant:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      detail: error.detail
    });
    res.status(500).json({ error: 'Failed to create participant', details: error.message });
  }
};

// Keep the rest of your functions the same...
const saveResponse = async (req, res) => {
  try {
    const {
      participantId,
      complexityLevel,
      sentenceId,
      questionId,
      questionType,
      answer,
      questionStartTime,
      questionEndTime,
      responseTime
    } = req.body;

    console.log('Saving response:', {
      participantId,
      complexityLevel,
      sentenceId,
      questionId,
      questionType,
      answer,
      responseTime
    });

    const responseTimeMs = responseTime != null ? Math.round(Number(responseTime)) : 0;
    
    const query = `
      INSERT INTO responses (
        participant_id, complexity_level, sentence_id, question_id,
        question_type, answer, question_start_time, question_end_time,
        response_time_ms, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
      RETURNING id
    `;

    const result = await pool.query(query, [
      participantId,
      complexityLevel,
      sentenceId,
      questionId,
      questionType,
      answer,
      new Date(questionStartTime),
      new Date(questionEndTime),
      responseTimeMs
    ]);

    res.json({ success: true, responseId: result.rows[0].id });
  } catch (error) {
    console.error('Error saving response:', error);
    res.status(500).json({ error: 'Failed to save response' });
  }
};

const getParticipantData = async (req, res) => {
  try {
    const { participantId } = req.params;
    
    const query = `
      SELECT r.*, p.demographics, p.created_at as participant_created_at
      FROM responses r
      JOIN participants p ON r.participant_id = p.id
      WHERE r.participant_id = $1
      ORDER BY r.complexity_level, r.question_id
    `;
    
    const result = await pool.query(query, [participantId]);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching participant data:', error);
    res.status(500).json({ error: 'Failed to fetch participant data' });
  }
};

const getAllData = async (req, res) => {
  try {
    const query = `
      SELECT r.*, p.demographics, p.created_at as participant_created_at
      FROM responses r
      JOIN participants p ON r.participant_id = p.id
      ORDER BY p.created_at, r.complexity_level, r.question_id
    `;
    
    const result = await pool.query(query);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching all data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

module.exports = {
  createParticipant,
  saveResponse,
  getParticipantData,
  getAllData
};