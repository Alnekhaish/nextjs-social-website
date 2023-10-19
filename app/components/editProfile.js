"use client";
import { Avatar, Card, FormControl, Button } from "@rewind-ui/core";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile() {
  const [cookies] = useCookies("token");
  const token = cookies.token;
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://express-social-website.vercel.app/users/details",
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        );
        reset({
          fname: res.data.user.profile.first_name,
          lname: res.data.user.profile.last_name,
          email: res.data.user.email,
        });

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getUser();
  }, [cookies.token]);

  async function onSubmit(formData) {
    console.log(formData);
    try {
      const response = await axios.put(
        "https://express-social-website.vercel.app/users/details",
        {
          password: formData.password,
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <Card radius="md" className="w-full py-5 lg:w-2/5">
        <Card.Body>
          <div className="flex items-center justify-center gap-x-3">
            <Avatar size="lg" />
            <div>
              <h1 className="text-xl font-bold">{`${user.profile.first_name} ${user.profile.last_name}`}</h1>
              <h1 className="font-light text-gray-500">{user.username}</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className="mt-5">
              <FormControl.Label className="font-medium">
                First Name
              </FormControl.Label>
              <FormControl.Input
                {...register("fname", { required: true })}
                type="text"
                radius="lg"
                withRing={false}
                color=""
              />
              {errors.fname && (
                <p className="text-red-500">
                  {errors.fname.type === "required" && "First name is required"}
                </p>
              )}
            </FormControl>
            <FormControl className="mt-5">
              <FormControl.Label className="font-medium">
                Last Name
              </FormControl.Label>
              <FormControl.Input
                {...register("lname", { required: true })}
                type="text"
                radius="lg"
                withRing={false}
                color=""
              />
            </FormControl>
            <FormControl className="mt-5">
              <FormControl.Label className="font-medium">
                Email
              </FormControl.Label>
              <FormControl.Input
                {...register("email", { required: true })}
                type="text"
                radius="lg"
                withRing={false}
                color=""
              />
            </FormControl>
            <FormControl className="mt-5">
              <FormControl.Label className="font-medium">
                New Password
              </FormControl.Label>
              <FormControl.Input
                {...register("password", { required: true })}
                type="password"
              />
            </FormControl>
            <FormControl className="mt-5">
              <FormControl.Label className="font-medium">
                Confirm Password
              </FormControl.Label>
              <FormControl.Input
                {...register("rpassword", { required: true })}
                type="password"
              />
            </FormControl>
            <Button type="submit" className="mt-5 w-full bg-primary">
              Save
            </Button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}
