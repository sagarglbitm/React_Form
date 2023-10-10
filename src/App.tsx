

import React from "react";
import Form from "./Component/Form/Form";
import Side from "./Component/side/side";
import data from "./Component/Form/json_form.json";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="cont">
        {/* <Side /> */}
        <Side  title = "Let's talk about everything!" text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?"/>
      </div>
      <div className="contain">
        <Form data={data}/>
      </div>
    </div>
  );
};

export default App;

