import { Card } from "@rewind-ui/core";
import Post from "./post";

export default function Timeline() {
  return (
    <div>
      <Card className="mb-10" shadow="none" radius="md" size="lg">
        <Card.Body>
          <Post />
        </Card.Body>
        <Card.Body>
          <Post />
        </Card.Body>
        <Card.Body>
          <Post />
        </Card.Body>
        <Card.Body>
          <Post />
        </Card.Body>
      </Card>
    </div>
  );
}
