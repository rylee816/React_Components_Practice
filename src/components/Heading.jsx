import React from "react";
import "/public/styles.css";

let image;
const night =
  "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const afternoon =
  "https://images.unsplash.com/photo-1563166044-661667b14c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const morning =
  "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;
  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning!";
    customStyle.color = "red";
    image = morning;
  } else if (currentTime < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "green";
    image = afternoon;
  } else {
    greeting = "Good Night!";
    customStyle.color = "blue";
    image = night;
  }
  return (
    <div>
      <h1 style={customStyle}>{greeting}</h1>
      <img src={image} alt="" />
    </div>
  );
}

export default Heading;
