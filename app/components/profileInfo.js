import { Card, Avatar, Button } from "@rewind-ui/core";

export default function Profile() {
  return (
    <Card size="md" radius="md">
      <Card.Header className="bg-primary">
        <Avatar
          className="top-14 md:top-20 md:h-32 md:w-32"
          src="https://avatars.githubusercontent.com/u/810438?s=96&v=4"
          size="xl"
        />
      </Card.Header>
      <Card.Body>
        <div className="mt-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Name Name</h1>
              <h1 className="text-gray-500">@account</h1>
            </div>
            <Button
              className="border-primary font-semibold text-primary"
              tone="outline"
              color=""
            >
              Edit Profile
            </Button>
          </div>
          <h1 className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing eli anim .
          </h1>
        </div>
      </Card.Body>
    </Card>
  );
}
