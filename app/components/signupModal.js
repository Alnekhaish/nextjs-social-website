import { Card, Modal, FormControl, Button, Alert } from "@rewind-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupModal({ open, setOpen }) {
  const [failed, setFailed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, isSubmitted] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit(formData) {
    setIsSubmitting(true);
    isSubmitted(true);
    try {
      const response = await axios.post(
        "https://nextjs-social-website.vercel.app/api/signup",
        {
          email: formData.email,
          username: formData.username,
          firstname: formData.firstname,
          lastname: formData.lastname,
          password: formData.password,
        },
      );
      if (response.status === 200) {
        setFailed(false);
      }
    } catch (error) {
      setFailed(false);
      console.log(error);
    }
    setIsSubmitting(false);
  }

  return (
    <Modal
      size="md"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Card>
        <Card.Header>
          <h1 className="text-3xl font-bold">Sign Up</h1>
        </Card.Header>
        <Card.Body>
          {submitted && (
            <Alert
              className="mb-5 py-1"
              color={failed ? "red" : "green"}
              iconType={failed ? "error" : "success"}
              title={failed ? "Account is exist" : "Signed up success"}
            >
              {failed
                ? "Email or username is already used"
                : "You can now log in using username and password"}
            </Alert>
          )}
          <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <FormControl validation={errors.email ? "invalid" : "none"}>
              <FormControl.Label required>Email address</FormControl.Label>
              <FormControl.Input
                {...register("email", {
                  required: true,
                  minLength: 1,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.email && (
                <p className="text-red-500">
                  {errors.email.type === "required"
                    ? "Email is required"
                    : "Email is incorrect"}
                </p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.username ? "invalid" : "none"}
            >
              <FormControl.Label required>Username</FormControl.Label>
              <FormControl.Input
                {...register("username", {
                  required: true,
                  minLength: 1,
                })}
                type="text"
                placeholder="Username"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.username && (
                <p className="text-red-500">Username is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.firstname ? "invalid" : "none"}
            >
              <FormControl.Label required>First Name</FormControl.Label>
              <FormControl.Input
                {...register("firstname", {
                  required: true,
                  minLength: 1,
                })}
                type="text"
                placeholder="First Name"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.firstname && (
                <p className="text-red-500">First name is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.lastname ? "invalid" : "none"}
            >
              <FormControl.Label required>Last Name</FormControl.Label>
              <FormControl.Input
                {...register("lastname", {
                  required: true,
                  minLength: 1,
                })}
                type="text"
                placeholder="Last Name"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.lastname && (
                <p className="text-red-500">Last name is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.password ? "invalid" : "none"}
            >
              <FormControl.Label required>Password</FormControl.Label>
              <FormControl.Input
                {...register("password", {
                  required: true,
                  minLength: 1,
                })}
                type="password"
                placeholder="Password"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </FormControl>
            <Button
              className="mt-10 w-full bg-primary hover:bg-blue-800 active:bg-blue-900"
              type="submit"
              loading={isSubmitting}
            >
              Sign Up
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
