import React from "react";
// Using to reduce the code for the Title of the Section
function Title({ children, id }) {
  return (
    // Title of the Section
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900"
    >
      {children}
    </h1>
  );
}

export default Title;
