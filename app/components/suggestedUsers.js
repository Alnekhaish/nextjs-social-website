import { Card, Avatar } from "@rewind-ui/core";

export default function SuggestedUsers() {
  return (
    <div>
      <div className="flex items-center gap-x-5">
        <h1 className="text-xl font-bold">You May Know</h1>
        <h1 className="text-xl">-</h1>
        <h1 className="text-blue-500">see all</h1>
      </div>
      <Card size="lg" shadow="none" radius="md">
        <Card.Body className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3">
            <Avatar />
            <div>
              <h1>name</h1>
              <h1 className="text-sm font-light">@account</h1>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Avatar />
            <div>
              <h1>name</h1>
              <h1 className="text-sm font-light">@account</h1>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Avatar />
            <div>
              <h1>name</h1>
              <h1 className="text-sm font-light">@account</h1>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Avatar />
            <div>
              <h1>name</h1>
              <h1 className="text-sm font-light">@account</h1>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
