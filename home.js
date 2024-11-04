import { Link } from "react-router-dom";

function HomePage(){
    return (
    <div>
        <div id="mainContainer">
            <div id="aboutQuizContainer">
                <div id="header">
                <h1 className="aboutQuizElement">Start your <span>Quiz</span></h1>
                <h1 className="aboutQuizElement">Journey Today</h1>
                </div>
                <p id="aboutPage">This  quiz estimates your level in just 15 minutes</p>
                     <ul>
                        <li className="aboutQuizList">Get an estimate of your General Knowledge level: beginner, intermediate, advanced</li>
                        <li className="aboutQuizList">Get start the quiz page and gain more Knowledge EveryDay</li>
                        <li className="aboutQuizList">Share your score on social media</li>
                        <li className="aboutQuizList">In our Learn More page there is more about our questions</li>
                        <li className="aboutQuizList">In our Quiz Site there is not only 10 Question we Have different different Questions</li>
                        <li className="aboutQuizList">Take the quiz as many times as you like to practice for a certifying exam. The quiz doesn't issue a certificate.</li>
                     </ul>
                <Link to="/QuizQuestions" className="startQuizLink">Start Quiz</Link>
            </div>

           <img src="quiz-3644414_1920.png" className="quizMainImageElement" alt="Quiz image Loading..."></img>
        </div>

        <article>
            <div id="forTeachersUsageContainer">
                <h1 className="aboutTeacherUsageElement">For Teachers</h1>
                <h1 className="aboutTeacherUsageElement">Stream Your Quiz Question</h1>
                <ul>
                    <li className="teacherUsageList">1.Manage Your Quiz Question</li>
                    <li className="teacherUsageList">2.Track Student Progress</li>
                    <li className="teacherUsageList">3.Interactive Quiz Challenges</li>
                    <li className="teacherUsageList">4.Customize Study Plans</li>
                    <li className="teacherUsageList">5.publish Quiz results</li>
                    <li className="teacherUsageList">6.Make Online Test</li>
                    <li className="teacherUsageList">7.Can get more Question for your Topic related</li>
                    <li className="teacherUsageList">8.Can Set Multiple Options</li>
                    <li className="teacherUsageList">9.Easy to Guide Students</li>
                    <li className="teacherUsageList">10.Can conduct combine Section</li>
                    <li className="teacherUsageList">11.Can set  10 Questions free</li>
                    <li className="teacherUsageList">12.Can conduct retest on the Same Quiz</li>
                    <li className="teacherUsageList">13.Student marks will not deleted upto a year</li>
                    <li className="teacherUsageList">14.Can get results immediately</li>
                    <li className="teacherUsageList">15.Can set Timing Questions</li>
                </ul>
                <Link to="/LearnMorePage" className="learnMorePageRoutingLink">Learn More</Link>
            </div>

             <img src="quiz.png" className="teacherUsageImageElement" alt="QuestionLogo"></img> 
        </article>

    </div>
    );
}

export default HomePage;