import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './home';
import QuizQuestions from './quizquestion1';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import QuizResults from './quizResults';
import LearnMorePage from './learnMore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="QuizQuestions" element={<QuizQuestions />}/>
    <Route path="LearnMorePage" element={<LearnMorePage />}/>
    <Route path="quizResultPage" element={<QuizResults />}/>
  </Routes>
  </BrowserRouter>
);
