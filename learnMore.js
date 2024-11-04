import { Link } from "react-router-dom"
function LearnMorePage(){
    return <div id="learnMorePageContainer">
        <h1 id="aboutLearnMorePage">Guideliness</h1>
        <div id="LearningPagemainContainer">
        <div id="usesContainer">
          <h1 className="guidelinessHeading">Uses</h1>
          <hr></hr>
          <p className="aboutParagraphElement">Our Quiz Site is very usefull for school Students,college students,Upsc students,and interviews</p>
        <ul>
            <li className="quizPageDetails">Track your progress</li>
            <li className="quizPageDetails">Set Your Goals</li>
            <li className="quizPageDetails">Track your progress</li>
            <li className="quizPageDetails">Ad-free Experience</li>
            <li className="quizPageDetails">Can monitoring Student</li>
            <li className="quizPageDetails">Can attend a multiple quiz</li>
        </ul>
        </div>

        <div id="rulesContainer">
        <h1 className="guidelinessHeading">Rules</h1>
        <hr></hr>
        <p className="aboutParagraphElement">There are some rules and guide for using our quiz to Staff and students to how to use Our Quiz</p>
        <ul>
            <li className="quizPageDetails">Should Attend 10 Question</li>
            <li className="quizPageDetails">One Question filled After only Next Page Available</li>
            <li className="quizPageDetails">Can Reanswered the Submited Question</li>
            <li className="quizPageDetails">Multiple Choice Available</li>
            <li className="quizPageDetails">Choose only One Answer</li>
            <li className="quizPageDetails">Alternate questions</li>
            <li className="quizPageDetails">There is no Timing</li>
        </ul>
        </div>

        <div id="aboutUsContainer">
        <h1 className="guidelinessHeading">About us</h1>
        <hr></hr>
        <p className="aboutParagraphElement">These details are about us how our sites are working with students</p>
        <ul>
            <li className="quizPageDetails">Easy to use</li>
            <li className="quizPageDetails">Easy Questions for beginner</li>
            <li className="quizPageDetails">Everything in our Quiz</li>
            <li className="quizPageDetails">Results Available</li>
            <li className="quizPageDetails">GK Knowledge</li>
            <li className="quizPageDetails">Sports Knowledge</li>
            <li className="quizPageDetails">Study related Questions</li>
        </ul>
        </div>

        </div>
        <img src="tick.png" id="tickimageOne" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageTwo" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageThree" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageFour" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageFive"alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageSix" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageSeven" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageEight"alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageNine" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageTen" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageEleven" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageTwelve" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageThirten" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageFouten" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageFiften" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageSixeten" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageSeventen" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageEighteen" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageNineten" alt="tickImage loading..."></img>
        <img src="tick.png" id="tickimageTwenty" alt="tickImage loading..."></img>
        <Link to="/"className="homePageLink">Previous</Link>
    </div>
}

export default LearnMorePage;