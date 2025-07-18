const express = require('express');
const cors = require('cors');
require('dotenv').config();

const studyRoutes = require('./routes/studyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Update CORS with your new clean URL
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://center-embedding-study.vercel.app',  // Your clean URL
        'https://center-embedding-study-ou37zxl35-sangmitra06s-projects.vercel.app'  // Keep the old one just in case
      ]
    : 'http://localhost:3000',
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});