const express = require('express');
const cors = require('cors');
require('dotenv').config();

const studyRoutes = require('./routes/studyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Updated with your actual URLs
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://center-embedding-study-g8a8s9ecx-sangmitra06s-projects.vercel.app']
    : 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/study', studyRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Center Embedding Study API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});