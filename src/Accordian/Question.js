import React, { useState } from "react";
import Accordin from "./Accordin";
import data from "./data";

const Question = () => {
  const [Questions, setQuestions] = useState(data);

  return (
    <>
      <h3 className="page-title">Questions and answers about login</h3>
      <main>
        <div className="accordian-container">
          {Questions.map((question) => {
            return <Accordin question={question} />;
          })}
        </div>
      </main>
      ;
    </>
  );
};

export default Question;
