"use client";
import { Avatar, Button, Card, Modal } from "@rewind-ui/core";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import ReplayModal from "./replayModal";
import { getDateDifference } from "../utils/helper";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Post({ children, post }) {
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies("token");

  async function handleRetweet(e) {
    e.preventDefault();
  }
  async function handleLike(e) {
    e.preventDefault();
    console.log(cookies.token);

    try {
      const response = await axios.post(
        `http://localhost:8000/posts/${post._id}/like`,
        {},
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
      <ReplayModal post={post} open={open} onClose={() => setOpen(false)} />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-3">
          <Avatar src={post.author.profile.avatar} />
          <h1>
            {`${post.author.profile.first_name}  ${post.author.profile.last_name}`}
          </h1>
          <h1 className="text-sm font-light">
            @{post.author.username} - {getDateDifference(post.createdAt)}
          </h1>
        </div>
        <h1 className="ml-16 w-full text-black">{post.content}</h1>
        <div className="ml-3 flex justify-around">
          <Button
            icon
            color=""
            className="border-none active:border-none"
            onClick={() => setOpen(true)}
          >
            <BsChat className="hover:text-primary" size={20} />
          </Button>
          <Button
            icon
            color=""
            className="border-none active:border-none"
            onClick={handleRetweet}
          >
            <AiOutlineRetweet className="hover:text-primary" size={20} />
          </Button>
          <Button
            icon
            color=""
            className="border-none active:border-none"
            onClick={handleLike}
          >
            <AiOutlineHeart className="hover:text-red-500" size={20} />
          </Button>
        </div>
        <div className="mt-3 border-l-2">{children}</div>
      </div>
    </>
  );
}
