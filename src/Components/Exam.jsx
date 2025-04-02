import React, { useState } from "react";
import { useGetQuestionsQuery, useSubmitAnswersMutation } from "../Apis/Apis";

const Exam = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();
  const [isAverage, setIsAverage] = useState(false);
  const correctAnswers = []
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0)

  if (isLoading) return <p>Loading questions...</p>;
  if (error) return <p className="text-red-500">Failed to load questions</p>;


  const handleChange = (questionId, option) => {
    setAnswers({...answers, [questionId]: option });
  };



  const handleSubmit = async () => {
    setScore(0)
    let getScore = 0
    try {
      Object.values(answers).map(value => {
        correctAnswers.map((corAns) => {
          if(value === corAns){
            getScore++
          }
        })
      })
      
      const average = 15 / 2
      if(getScore > average){
        setIsAverage(true)
      }else{
        setIsAverage(false)
      }
      setScore(getScore)
    } catch (err) {
      alert("Failed to submit answers");
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Exam Questions</h2>
      {questions.map((question) => (
        <div key={question.id} className="border p-4 rounded mt-4">
        {correctAnswers.push(question.correct_answer)}
          <p className="font-semibold">{question.question_text}</p>
          {question.options.map((opt) => (
            <label key={opt} className="block">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={opt}
                checked={answers[question.id] === opt}
                onChange={() => handleChange(question.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded mt-4"
        
      >
        Submit Answers
      </button>
      <h1 className="mt-5 text-3xl text-green-700">{isAverage ? "Congratulations!! your score is = " + `${score}`+ " out of " + `${questions.length}`: "Sorry!! your score is below average = " +  `${score}`+ " out of "  + `${questions.length}`}</h1>
    </div>
  );
};

export default Exam;