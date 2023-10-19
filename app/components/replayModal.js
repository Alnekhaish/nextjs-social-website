"use client";
import { Modal, Card, Avatar, Input, Button, Popover } from "@rewind-ui/core";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function ReplayModal({ post, open, onClose }) {
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef();
  const router = useRouter();
  const [cookies] = useCookies("token");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/comments",
        {
          content: e.target["content"].value,
          post: post._id,
        },
        {
          headers: {
            Authorization: `bearer ${cookies.token}`,
          },
        },
      );
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    setInputValue("");
  }

  return (
    <Modal size="xl" open={open} onClose={onClose} className="z-50 w-fit">
      <Card size="lg">
        <Card.Body className="w-fit">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <Avatar src={post.author.profile.avatar} />
              <h1>
                {`${post.author.profile.first_name}  ${post.author.profile.last_name}`}
              </h1>
              <h1 className="text-sm font-light">
                @{post.author.username} - 12m
              </h1>
            </div>
            <h1 className="ml-16 w-full text-black">{post.content}</h1>
          </div>
        </Card.Body>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center">
              <Avatar className="aspect-square" src="" />
              <Input
                name="content"
                className="text-black"
                color=""
                tone="transparent"
                withRing={false}
                placeholder="Post your replay"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="ml-16 flex items-center text-primary">
              <Input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
              />
              <Button
                icon
                withRing={false}
                tone="transparent"
                color="bg-primary"
                onClick={() => fileInputRef.current.click()}
              >
                <BsImage size={20} />
              </Button>
              <Popover>
                <Popover.Trigger>
                  <Button
                    icon
                    withRing={false}
                    tone="transparent"
                    color="bg-primary"
                  >
                    <BsEmojiSmile size={20} />
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <EmojiPicker
                    className="z-50"
                    onEmojiClick={(emoji, e) =>
                      setInputValue(
                        (inputValue) =>
                          inputValue +
                          (emoji.isCustom ? emoji.unified : emoji.emoji),
                      )
                    }
                  />
                </Popover.Content>
              </Popover>

              <Button
                icon
                withRing={false}
                tone="transparent"
                color="bg-primary"
              >
                <AiOutlineGif size={25} />
              </Button>
              <Button
                className="ml-auto mr-3 w-24 bg-primary font-semibold hover:bg-blue-800 focus:bg-blue-900 active:bg-blue-900"
                type="submit"
              >
                Replay
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
