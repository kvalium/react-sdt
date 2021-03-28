import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({
  label,
  name,
  required,
  register,
  errors,
  ...options
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className={`input${errors[name] ? " is-danger" : ""}`}
          name={name}
          type="text"
          placeholder={label}
          ref={register({ required })}
          {...options}
        />
        {errors[name] && (
          <p className="help is-danger">This field is required</p>
        )}
      </div>
    </div>
  );
};
