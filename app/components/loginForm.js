"use client";

import { FormControl, Button } from "@rewind-ui/core";
import { MdOutlineAlternateEmail, MdLock } from "react-icons/md";

export default function LoginForm() {
  return (
    <form className="mx-auto mt-20 w-5/6" onSubmit={() => alert("submit")}>
      <FormControl>
        <FormControl.Label>Email address</FormControl.Label>
        <FormControl.Input
          leftIcon={<MdOutlineAlternateEmail color="gray" />}
          type="email"
          placeholder="Your Email"
          radius="lg"
          withRing={false}
          color=""
        />
      </FormControl>
      <FormControl className="mt-5">
        <FormControl.Label>Password</FormControl.Label>
        <FormControl.Input
          leftIcon={<MdLock color="gray" />}
          type="email"
          placeholder="Your Password"
          radius="lg"
          withRing={false}
          color=""
        />
      </FormControl>
      <Button
        className="mt-10 w-full bg-primary hover:bg-blue-800 active:bg-blue-900"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
