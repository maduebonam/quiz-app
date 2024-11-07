import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Quiz from './Quiz';

function App() {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-6">Chemistry Quiz</h1>
      <Quiz />
    </div>
  );
}

export default App
