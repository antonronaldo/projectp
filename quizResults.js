import { useLocation } from "react-router-dom";

function QuizResults() {
   const location=useLocation();

  return (
    <div>
      <div id="resultContainer">
        <h1 id="quizResults">Quiz Results</h1>
        <img id="resultTickImage" src="tick.png" alt="loading...."></img>
        <h2 id="resultHeading">Hey,You have Completed Quiz</h2>
        <div id="percentageContainer">
         <ul>
            <li className="resultList">YOUR SCORE</li>
         </ul>
         <ul>
            <li className="results">{`${location.state.results*10}%`}</li>
         </ul>
        </div>

        <div id="pointsContainer">
         <ul>
            <li className="resultList">YOUR Points</li>
         </ul>
         <ul>
            <li className="results">{`${location.state.results}`}</li>
         </ul>
        </div>
      </div>
    </div>
  );
}

export default QuizResults;