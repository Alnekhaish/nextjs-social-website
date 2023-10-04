import { Card, Avatar, Input, Button } from "@rewind-ui/core";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";

export default function NewPost() {
  return (
    <Card className="h-48" size="md" shadow="none" radius="md">
      <Card.Header className="h-12">
        <h1 className="text-xl font-bold">Home</h1>
      </Card.Header>
      <Card.Body>
        <div className="flex w-full items-center">
          <Avatar className="aspect-square" />
          <Input
            color=""
            tone="transparent"
            withRing={false}
            placeholder="What's happning today?"
          />
        </div>
        <div className="ml-16 flex items-center gap-x-3 text-primary">
          <BsImage size={20} />
          <BsEmojiSmile size={20} />
          <AiOutlineGif size={25} />
          <Button className="ml-auto mr-3 w-24 bg-primary font-semibold hover:bg-blue-800 focus:bg-blue-900">
            Post
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
