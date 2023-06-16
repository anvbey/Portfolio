import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "DevOps Engineer",
          "Competitive Programmer",
          "Freelancer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
      }}
    />
  );
}

export default Type;
