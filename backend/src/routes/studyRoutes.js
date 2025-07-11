const express = require('express');
const {
  createParticipant,
  saveResponse,
  getParticipantData,
  getAllData
} = require('../controllers/studyController');

const router = express.Router();

router.post('/participant', createParticipant);
router.post('/response', saveResponse);
router.get('/participant/:participantId', getParticipantData);
router.get('/data', getAllData);

module.exports = router;