import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import Api from "../components/config/Api";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Navigate = useNavigate();
  const onSubmit = (e) => {
    Api.post("post", {
      firstname: e.firstName,
      lastname: e.lastName,
      email: e.email,
      password: e.password,
    }).then((e) => {
      Navigate("/");
    });
  };

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <Link className="Link" to="/">
        <p className="sign">Sudah memiliki akun? Login disini</p>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="in">
            <Input
              place="First name"
              register={register("firstName", {
                required: true,
              })}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <p>First name belum diisi</p>
            )}
          </div>
          <div className="put">
            <Input
              place="Last Name"
              register={register("lastName", {
                required: true,
              })}
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <p>Last name belum diisi</p>
            )}
          </div>
        </div>

        <Input
          className="input"
          place="Email"
          register={register("email", {
            required: true,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email belum diisi</p>
        )}

        <Input
          className="input"
          type="password"
          place="Password"
          register={register("password", {
            required: true,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password belum diisi</p>
        )}

        <Input
          type="password"
          place="ConfirmPassword"
          register={register("ConfirmPassword", {
            required: true,
          })}
        />
        {errors.ConfirmPassword &&
          errors.ConfirmPassword.type === "required" && <p>Confirm password!</p>}
        <Button />
      </form>
    </div>
  );
};

export default Signup;
