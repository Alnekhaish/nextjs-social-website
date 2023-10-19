import { Card, Modal, FormControl, Button, Alert } from "@rewind-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ResetPasswordModal({ open, setOpen }) {
  const [failed, setFailed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit(formData) {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/resetpassword",
        {
          username: formData.username,
          password: formData.password,
        },
      );
      if (response.status === 200) {
        setFailed(false);
      }
    } catch (error) {
      setFailed(true);
      console.log(error);
    }
    setIsSubmitted(true);
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
          <h1 className="text-3xl font-bold">Reset Password</h1>
        </Card.Header>
        <Card.Body>
          {isSubmitted && (
            <Alert
              className="mb-5 py-1"
              color={failed ? "red" : "green"}
              iconType={failed ? "error" : "success"}
              title={failed ? "User does not exist" : "Password is reset"}
            >
              {failed
                ? "User does not exist"
                : "You can now log in using username and password"}
            </Alert>
          )}
          <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.username?.type === "required" && (
                <p className="text-red-500">Username is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.password ? "invalid" : "none"}
            >
              <FormControl.Label required>New Password</FormControl.Label>
              <FormControl.Input
                {...register("password", {
                  required: true,
                  minLength: 1,
                })}
                name="password"
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
            <Button
              className="mt-10 w-full bg-primary hover:bg-blue-800 active:bg-blue-900"
              type="submit"
              loading={isSubmitting}
            >
              Reset Password
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
