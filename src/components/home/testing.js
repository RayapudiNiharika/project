import React from "react";

const Testing = () => {
  const clickHandler = () => {
    console.log("button clicked");

    fetch("http://192.168.1.5:8085/employees", {
      method: "get",

      mode: "no-cors",

      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())

      .then((result) => {
        console.log("hey");

        console.log(result);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p>testing of front-end & back-end </p>{" "}
      <button onClick={clickHandler}>check</button>{" "}
    </div>
  );
};

export default Testing;
