const pool = require('../models/database');
const { v4: uuidv4 } = require('uuid');

const createParticipant = async (req, res) => {
  try {
    const participantId = uuidv4();
    const { demographics } = req.body;
    
    const query = `
      INSERT INTO participants (id, demographics, created_at)
      VALUES ($1, $2, NOW())
      RETURNING id
    `;
    
    const result = await pool.query(query, [participantId, JSON.stringify(demographics || {})]);
    
    res.json({ participantId: result.rows[0].id });
  } catch (error) {
    console.error('Error creating participant:', error);
    res.status(500).json({ error: 'Failed to create participant' });
  }
};

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

    // Log what we received
    console.log('Received response data:', {
      participantId,
      complexityLevel,
      sentenceId,
      questionId,
      questionType,
      answer,
      questionStartTime,
      questionEndTime,
      responseTime,
      responseTimeType: typeof responseTime
    });

    // Make sure responseTime is a valid number
    const responseTimeMs = responseTime != null ? Math.round(Number(responseTime)) : 0;
    
    console.log('Processed responseTimeMs:', responseTimeMs);

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