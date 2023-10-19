"use client";
import { Card, Avatar, Button } from "@rewind-ui/core";
import { useState } from "react";
import EditProfileModal from "./editProfileModal";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Profile({ user, other }) {
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies("token");

  async function follow(username) {
    try {
      const response = await axios.post(
        `https://express-social-website.vercel.app/users/follow`,
        { targetUserName: username },
        {
          headers: {
            Authorization: `bearer ${cookies.token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <EditProfileModal open={open} setOpen={setOpen} user={user} />
      <Card size="md" radius="md">
        <Card.Header className="bg-primary">
          <Avatar
            className="top-14 md:top-20 md:h-32 md:w-32"
            src={user.profile.avatar}
            size="xl"
          />
        </Card.Header>
        <Card.Body>
          <div className="mt-10">
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold">
                  {`${user.profile.first_name} ${user.profile.last_name}`}
                </h1>
                <h1 className="text-gray-500">@{user.username}</h1>
              </div>
              {other ? (
                <Button
                  className="border-primary font-semibold text-primary"
                  tone="outline"
                  color=""
                  onClick={() => follow(user.username)}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  className="border-primary font-semibold text-primary"
                  tone="outline"
                  color=""
                  onClick={() => setOpen(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
            <h1 className="mt-4">{user.profile.bio}</h1>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
