"use client";
import { Card, Avatar, Button } from "@rewind-ui/core";
import { useState } from "react";
import EditProfileModal from "./editProfileModal";

export default function Profile({ user }) {
  const [open, setOpen] = useState(false);

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
              <Button
                className="border-primary font-semibold text-primary"
                tone="outline"
                color=""
                onClick={() => setOpen(true)}
              >
                Edit Profile
              </Button>
            </div>
            <h1 className="mt-4">{user.profile.bio}</h1>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
