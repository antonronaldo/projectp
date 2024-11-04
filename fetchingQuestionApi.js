import questionsApi from "../../api/questionsApi/questionsApi";
import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchingQuestionsApi(){

    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        axios
          .get(questionsApi)
          .then((response) => {
            setQuestionList(response.data.results);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    return questionList; 
}

export default FetchingQuestionsApi;
