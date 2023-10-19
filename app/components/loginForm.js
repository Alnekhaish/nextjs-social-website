"use client";

import { FormControl, Button, Checkbox, Alert } from "@rewind-ui/core";
import { MdPerson2, MdLock } from "react-icons/md";
import { useState } from "react";
import SignupModal from "@/app/components/signupModal";
import ResetPasswordModal from "./resetPasswordModal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [openSignup, setSignupOpen] = useState(false);
  const [openResetPassword, setResetPasswordOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginFailed, setLoginFailed] = useState(false);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(formData) {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://express-social-website.vercel.app/api/login",
        {
          username: formData.username,
          password: formData.password,
        },
      );

      if (response.status === 200) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <SignupModal open={openSignup} setOpen={setSignupOpen} />
      <ResetPasswordModal
        open={openResetPassword}
        setOpen={setResetPasswordOpen}
      />
      <form className="mx-auto mt-20 w-5/6" onSubmit={handleSubmit(onSubmit)}>
        {loginFailed && (
          <Alert
            className="mb-5 py-1"
            color="red"
            iconType="error"
            title="Login Failed"
          >
            Username or password is not correct
          </Alert>
        )}
        <FormControl validation={errors.username ? "invalid" : "none"}>
          <FormControl.Label>Username</FormControl.Label>
          <FormControl.Input
            {...register("username", {
              required: true,
              minLength: 1,
            })}
            leftIcon={<MdPerson2 color="gray" />}
            type="text"
            placeholder="Username"
            radius="lg"
            withRing={false}
            color=""
          />
          {errors.username?.type === "required" && (
            <p className="text-red-500">Username is required</p>
          )}
        </FormControl>
        <FormControl
          className="mt-5"
          validation={errors.password ? "invalid" : "none"}
        >
          <FormControl.Label>Password</FormControl.Label>
          <FormControl.Input
            {...register("password", { required: true, minLength: 1 })}
            leftIcon={<MdLock color="gray" />}
            type="password"
            placeholder="Password"
            radius="lg"
            withRing={false}
            color=""
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
        </FormControl>
        <div className="mt-2 flex justify-between font-medium">
          <Checkbox color="bg-primary" label="Remember Me" withRing={false} />
          <Button
            withRing={false}
            tone="transparent"
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setResetPasswordOpen(true)}
          >
            Reset Password
          </Button>
        </div>
        <Button
          className="mt-10 w-full bg-primary hover:bg-blue-800 active:bg-blue-900"
          type="submit"
          loading={isSubmitting}
        >
          Login
        </Button>
        <div className="mt-10 flex items-center justify-between font-medium lg:mt-32">
          <h1 className="text-gray-500">Don&apos;t have an account yet?</h1>
          <Button
            withRing={false}
            tone="transparent"
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setSignupOpen(true)}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
}
