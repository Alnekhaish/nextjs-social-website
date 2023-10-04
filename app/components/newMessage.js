import { Button } from "@rewind-ui/core";

export default function NewMessage() {
  return (
    <div className="m-auto">
      <h1 className="text-5xl font-semibold text-black">Select a message</h1>
      <h1 className=" mt-3 w-7/12 text-xl text-gray-500">
        Choose from your existing conversations, start a new one, or just keep
        swimming
      </h1>
      <Button className="mt-3 bg-primary" size="lg">
        New message
      </Button>
    </div>
  );
}
