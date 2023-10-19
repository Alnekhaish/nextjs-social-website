import { Card, Tabs } from "@rewind-ui/core";
import Post from "@/app/components/post";
import Comment from "@/app/components/comment";

export default function ProfileTabs({ posts, comments }) {
  return (
    <div>
      <Card className="mb-10" shadow="none" radius="md" size="lg">
        <Tabs
          defaultTab="tab-1"
          className="w-full"
          fullWidth={true}
          color="blue"
        >
          <Tabs.List className="h-14">
            <Tabs.Tab anchor="tab-1">Posts</Tabs.Tab>
            <Tabs.Tab anchor="tab-2">Comments</Tabs.Tab>
            <Tabs.Tab anchor="tab-3">Media</Tabs.Tab>
            <Tabs.Tab anchor="tab-4">Likes</Tabs.Tab>
          </Tabs.List>

          <Tabs.Content anchor="tab-1">
            {posts &&
              posts.map((p) => (
                <Card.Body key={p._id}>
                  <Post post={p} key={p._id} />
                </Card.Body>
              ))}
          </Tabs.Content>
          <Tabs.Content anchor="tab-2">
            {comments.map((item) => {
              return (
                <Card.Body key={item._id}>
                  <Post post={item.post}>
                    <Comment comment={item} />
                  </Post>
                </Card.Body>
              );
            })}
          </Tabs.Content>
          <Tabs.Content anchor="tab-3"></Tabs.Content>
          <Tabs.Content anchor="tab-4"></Tabs.Content>
        </Tabs>
      </Card>
    </div>
  );
}
