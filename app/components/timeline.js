import { Card } from "@rewind-ui/core";
import Post from "./post";
import { cookies } from "next/headers";
import Comment from "@/app/components/comment";
import { redirect } from "next/navigation";

async function getUserTimeline() {
  const token = cookies().get("token");

  if (token) {
    try {
      const res = await fetch(
        "https://express-social-website.vercel.app/users/timeline",
        {
          method: "GET",
          headers: { Authorization: `bearer ${token.value}` },
        },
      );
      const data = await res.json();
      return data.timeline;
    } catch (error) {
      console.log(error);
    }
  } else {
    redirect("/login");
  }
}

export default async function Timeline() {
  const timelineData = await getUserTimeline();

  return (
    <div>
      <Card shadow="none" radius="md" size="lg">
        {timelineData.map((item) => {
          if (item.type === "post") {
            return (
              <Card.Body key={item._id}>
                <Post post={item} />
              </Card.Body>
            );
          } else {
            return (
              <Card.Body key={item._id}>
                <Post post={item.post}>
                  <Comment comment={item} />
                </Post>
              </Card.Body>
            );
          }
        })}
      </Card>
    </div>
  );
}
