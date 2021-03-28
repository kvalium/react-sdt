import React from "react";

export const Loading = () => {
  return (
    <>
      <h2 className="title is-2">Loading...</h2>
      <progress class="progress is-large is-info" max="100">
        60%
      </progress>
    </>
  );
};
