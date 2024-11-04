import { Link, useNavigate} from "react-router-dom";
import './index.css';
import { useState } from 'react';
import FetchingQuestionsApi from "./hooks/fetchingQuestionsapi/fetchingQuestionApi";     

function QuizQuestions() {
  const questionList=FetchingQuestionsApi()   
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choice, setChoice]=useState(false);
  const [userAnswers, setUserAnswers] = useState([]); 
  const minQuestionCount=0;
  const maxQuestionCount=questionList.length-1;
  const currentQuestion = questionList[currentIndex];
  const [results, setResults]=useState(0);
  const navigate=useNavigate();

  const handleChoiceChange=(event)=>{
     setChoice(event.target.value);
  }

  const onPreviousClick = () => {
    if (currentIndex > minQuestionCount) {
      setCurrentIndex(currentIndex - 1);
      setChoice(userAnswers[currentIndex-1]);
    }
  };


  const toquizResults=()=>{
    navigate('/quizResultPage',{state:{results}});
  }

  const onNextClick = () => {
    if (currentIndex < maxQuestionCount && choice) {
       const updatedAnswer=[...userAnswers]
       updatedAnswer[currentIndex]=choice
       setUserAnswers(updatedAnswer);
       setCurrentIndex(currentIndex + 1);
       setChoice(false);

       if(choice===currentQuestion.correct_answer){
        setResults(results+1);
       }  
    }

    else{
      if(choice)
      {
        const updatedAnswer=[...userAnswers]
        updatedAnswer[currentIndex]=choice
        setUserAnswers(updatedAnswer);
        if(choice===currentQuestion.correct_answer){
          setResults(results+1);
         } 
         toquizResults();
      }
    }

  };

  
  return (

    <div>
      {currentQuestion && (
        <div>
          <div id="quizContainer">
          <div id="aboutquiz">
          <h2 id="aboutQuizpage">General Knowledge Quiz</h2>
          <h2 id="aboutWhichQuestion">Question {currentIndex+1} of 10:</h2>
          <h2 id="question">{currentQuestion.question}</h2>

    <div className="options">
        <input type="radio" id="correctOption" name="question" value={currentQuestion.correct_answer} checked={choice === currentQuestion.correct_answer} onChange={handleChoiceChange} />
        <label htmlFor="correctOption">{currentQuestion.correct_answer}</label><br />
    </div>

      {currentQuestion.incorrect_answers.map((value, index) => (
        <div key={index} className="options">
         <input type="radio" id={`incorrectOption${index}`} name="question" value={value} checked={choice === value} onChange={handleChoiceChange} />
         <label htmlFor={`incorrectOption${index}`}>{value}</label><br />
       </div>
      ))}

          {currentIndex === minQuestionCount?<Link to="/"className="homePageRoutingLink">Previous</Link>:<button onClick={onPreviousClick} className="PreviousButton">Previous</button>}
          {<button onClick={onNextClick} className="nextButton">{currentIndex===maxQuestionCount? "submit":"Next"}</button>}
          </div>
          </div>
        </div>
         )}

    </div>
  );
}

export default QuizQuestions;