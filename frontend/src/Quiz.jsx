import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

 // useEffect(() => {
   // axios.get('http://localhost:5000/api/questions') 
     // .then(response => setQuestions(response.data))
     // .catch(error => console.error('Error fetching questions:', error));
  //}, []);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/questions`)
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!questions.length) return <div>Loading...</div>;
  if (currentQuestion >= questions.length) return <div className="text-center">Your score: {score}</div>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h2>
      <div className="flex flex-col mb-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className="py-2 px-4 bg-blue-500 text-white rounded mb-2 hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmitAnswer}
        className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;
