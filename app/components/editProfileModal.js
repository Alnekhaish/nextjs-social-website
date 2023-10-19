"use client";
import { Card, Modal, FormControl, Button, Alert } from "@rewind-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function EditProfileModal({ open, setOpen, user }) {
  const [cookies] = useCookies("token");
  const router = useRouter();
  const [failed, setFailed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fname: user.profile.first_name,
      lname: user.profile.last_name,
      bio: user.profile.bio,
    },
  });

  async function onSubmit(formData) {
    console.log(formData);
    setIsSubmitting(true);
    try {
      const response = await axios.put(
        "https://express-social-website.vercel.app/users/details",
        {
          profile: {
            first_name: formData.fname,
            last_name: formData.lname,
            bio: formData.bio,
          },
        },
        {
          headers: {
            Authorization: `bearer ${cookies.token}`,
          },
        },
      );
      router.refresh();
      if (response.status === 200) {
        setFailed(false);
      }
    } catch (error) {
      setFailed(true);
      console.log(error);
    }
    setIsSubmitted(true);
    setIsSubmitting(false);

    formData = undefined;
  }

  return (
    <Modal
      size="md"
      open={open}
      onClose={() => {
        setIsSubmitted(false);
        setOpen(false);
      }}
    >
      <Card>
        <Card.Header>
          <h1 className="text-3xl font-bold">Edit Profile</h1>
        </Card.Header>
        <Card.Body>
          {isSubmitted && (
            <Alert
              className="mb-5 py-1"
              color={failed ? "red" : "green"}
              iconType={failed ? "error" : "success"}
              title={failed ? "Error" : "Profile is updated"}
            >
              {failed ? "Error" : "Profile is updated"}
            </Alert>
          )}
          <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              className="mt-5"
              validation={errors.avatar ? "invalid" : "none"}
            >
              <FormControl.Label>Avatar</FormControl.Label>
              <FormControl.Input
                {...register("avatar")}
                type="file"
                radius="lg"
                withRing={false}
                color=""
              />
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.fname ? "invalid" : "none"}
            >
              <FormControl.Label required>First Name</FormControl.Label>
              <FormControl.Input
                {...register("fname", {
                  required: true,
                  minLength: 1,
                })}
                type="text"
                placeholder="First Name"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.fname?.type === "required" && (
                <p className="text-red-500">First name is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.lname ? "invalid" : "none"}
            >
              <FormControl.Label required>Last Name</FormControl.Label>
              <FormControl.Input
                {...register("lname", {
                  required: true,
                  minLength: 1,
                })}
                type="text"
                placeholder="Last Name"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.lname?.type === "required" && (
                <p className="text-red-500">Last name is required</p>
              )}
            </FormControl>
            <FormControl
              className="mt-5"
              validation={errors.bio ? "invalid" : "none"}
            >
              <FormControl.Label>Bio</FormControl.Label>
              <FormControl.Textarea
                {...register("bio")}
                type="text"
                placeholder="Bio"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.bio?.type === "required" && (
                <p className="text-red-500">Bio is required</p>
              )}
            </FormControl>

            <Button
              className="mt-10 w-full bg-primary hover:bg-blue-800 active:bg-blue-900"
              type="submit"
              loading={isSubmitting}
            >
              Save Profile
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
