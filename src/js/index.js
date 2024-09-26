import React from "react";
import ReactDOM from "react-dom";
import "/workspaces/TylerGodwin-SimpleCounter/src/styles/index.css";
import SimpleCounter from "./component/SimpleCounter.jsx";


let counter = 0;

setInterval(()=> {
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
  ReactDOM.render(
    <SimpleCounter
      firstDigit={one}
      secondDigit={two}
      thirdDigit={three}
      fourthDigit={four}
      fifthDigit={five}
      sixthDigit={six}
    />,
    document.querySelector("#app")
  );
}, 1000);