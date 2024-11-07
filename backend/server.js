const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Quiz Schema and Model
const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
});

const Question = mongoose.model('Question', questionSchema);

// Routes
app.get('/api/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
