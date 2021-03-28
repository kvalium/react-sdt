import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to="/users">Users</Link>
    </div>
  );
};
