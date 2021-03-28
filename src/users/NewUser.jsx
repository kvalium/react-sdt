import React from "react";

export const NewUser = () => {
  return (
    <>
      <h1 className="title is-1">New user</h1>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="First Name" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Email" />
        </div>
      </div>

      <div className="field">
        <label className="label">PIN Code</label>
        <div className="control">
          <input className="input" type="email" placeholder="PIN Code" />
        </div>
      </div>
    </>
  );
};
