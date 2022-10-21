import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Accordin(props) {
  const { question } = props;
  const [expand, setExpand] = useState(false);
  return (
    <div key={question.id} className="accordian">
      <div className="container">
        <div className="title">{question.title}</div>
        <div>
          {!expand ? (
            <button onClick={() => setExpand(!expand)}>
              <AiOutlinePlus />
            </button>
          ) : (
            <button onClick={() => setExpand(!expand)}>
              <AiOutlineMinus />
            </button>
          )}
        </div>
      </div>
      {expand && <p>{question.info}</p>}{" "}
    </div>
  );
}

export default Accordin;
