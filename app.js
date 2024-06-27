import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "header" },
  "Namaste React! from React element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const userName = "user";
//JSX- not html in javascript, instead its html like syntax
const Title = () => {
  return (
    <h1 className="head" tabIndex="1">
      Namaste React title Component composition
    </h1>
  );
};
//Compoennet composition- component used inside another like tittle in the following component
//React Component
//functional Component-
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {heading}
      <h1 className="heading" tabIndex="2">
        Welcome {userName} to Namaste React from Functional Component!
      </h1>
    </div>
  );
};

root.render(<HeadingComponent />);
