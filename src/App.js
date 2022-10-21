import React, { useState } from "react";
import Question from "./Accordian/Question";
// import Review from "./Reviews-carausel/Review";
// import List from "./Birthday-reminder/List";     birthday_reminder

export const API = "https://course-api.com/react-tours-project";

function App() {
  // <List />  birthday_reminder

  /* <h3 className="page-title">Our Tours</h3>
      <Tours /> */

  // <h3 className="page-title">Our Reviews</h3>
  // <Review />;

  return (
    <>
      <Question />
    </>
  );
}

export default App;
