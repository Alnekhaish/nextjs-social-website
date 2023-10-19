"use client";

import { Card, Avatar, Input, Button, Popover } from "@rewind-ui/core";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function NewPost({ avatar }) {
  const [cookies] = useCookies("token");
  const router = useRouter();
  const fileInputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/posts",
        {
          content: e.target["content"].value,
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
    <Card className="h-48" size="md" shadow="none" radius="md">
      <Card.Header className="h-12">
        <h1 className="text-xl font-bold">Home</h1>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full items-center">
            <Avatar className="aspect-square" src={avatar} />
            <Input
              name="content"
              className="text-black"
              color=""
              tone="transparent"
              withRing={false}
              placeholder="What's happning today?"
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
                  className="fixed left-0 top-10"
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

            <Button icon withRing={false} tone="transparent" color="bg-primary">
              <AiOutlineGif size={25} />
            </Button>
            <Button
              className="ml-auto mr-3 w-24 bg-primary font-semibold hover:bg-blue-800 focus:bg-blue-900 active:bg-blue-900"
              type="submit"
            >
              Post
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}
