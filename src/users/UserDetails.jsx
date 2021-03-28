import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useParams } from "react-router";
import { Input } from "../form/Input";
import { Loading } from "../form/Loading";
import { usePersistUser, useUser } from "./usersApi";
export const UserDetails = () => {
  let { id } = useParams();

  const { register, handleSubmit, errors, reset } = useForm();
  const {
    mutate: persist,
    isLoading: isSaving,
    error,
    isSuccess,
  } = usePersistUser();

  const { data: user, isLoading: loadingUser } = useUser(id);

  useEffect(() => {
    user && reset(user);
  }, [user, reset]);

  if (isSaving || loadingUser) return <Loading />;
  if (isSuccess) return <Redirect to="/users" />;
  if (error)
    return (
      <div class="notification is-danger">
        An error occurs while saving the user: {error}
      </div>
    );

  return (
    <>
      <h1 className="title is-1">New user</h1>
      <form onSubmit={handleSubmit(persist)}>
        <Input
          name="first_name"
          label="First Name"
          register={register}
          errors={errors}
          required
        />
        <Input
          name="last_name"
          label="Last Name"
          register={register}
          errors={errors}
          required
        />
        <Input
          name="email"
          label="Email"
          register={register}
          errors={errors}
          required
        />
        <Input
          name="pin_code"
          label="PIN Code"
          register={register}
          errors={errors}
          required
        />
        <input className="button is-primary" type="submit" />
      </form>
    </>
  );
};
