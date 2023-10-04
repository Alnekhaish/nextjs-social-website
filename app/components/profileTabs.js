import { Card, Tabs } from "@rewind-ui/core";
import Post from "@/app/components/post";

export default function ProfileTabs() {
  return (
    <div>
      <Card className="mb-10" shadow="none" radius="md" size="lg">
        <Tabs className="border-primary" defaultTab="tab-1" fullWidth={true}>
          <Tabs.List>
            <Tabs.Tab anchor="tab-1">Post</Tabs.Tab>
            <Tabs.Tab anchor="tab-2">Replies</Tabs.Tab>
            <Tabs.Tab anchor="tab-3">Media</Tabs.Tab>
            <Tabs.Tab anchor="tab-4">Likes</Tabs.Tab>
          </Tabs.List>

          <Tabs.Content anchor="tab-1">
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
          </Tabs.Content>
          <Tabs.Content anchor="tab-2">
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
          </Tabs.Content>
          <Tabs.Content anchor="tab-3">
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
          </Tabs.Content>
          <Tabs.Content anchor="tab-4">
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
          </Tabs.Content>
        </Tabs>
      </Card>
    </div>
  );
}
