import Sidebar from "@/app/components/sidebar";
import SearchBar from "@/app/components/searchBar";
import TrendList from "@/app/components/trendList";
import SuggestedUsers from "@/app/components/suggestedUsers";
import ProfileInfo from "@/app/components/profileInfo";
import ProfileTabs from "@/app/components/profileTabs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Home",
  description: "...",
};

async function getUserData(username) {
  const token = cookies().get("token");

  try {
    const res = await fetch(
      `https://express-social-website.vercel.app/users/${username}`,
      {
        method: "GET",
        headers: { Authorization: `bearer ${token.value}` },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getUserPosts(username) {
  const token = cookies().get("token");
  if (token) {
    try {
      const response = await fetch(
        `https://express-social-website.vercel.app/users/${username}/posts`,
        {
          method: "GET",
          headers: { Authorization: `bearer ${token.value}` },
        },
      );
      const data = await response.json();
      return data.posts;
    } catch (error) {
      console.log(error);
    }
  } else {
    redirect("/login");
  }
}
async function getUserComments(username) {
  const token = cookies().get("token");

  if (token) {
    try {
      const res = await fetch(
        `https://express-social-website.vercel.app/users/${username}/comments`,
        {
          method: "GET",
          headers: { Authorization: `bearer ${token.value}` },
        },
      );
      const data = await res.json();
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  } else {
    redirect("/login");
  }
}

export default async function UserProfile({ params }) {
  const userData = await getUserData(params.username);
  const userPosts = await getUserPosts(params.username);
  console.log(userPosts);
  const userComments = await getUserComments(params.username);

  return (
    <div className="h-screen">
      <Sidebar>
        <div className="grid h-full lg:grid-cols-6 lg:gap-x-10">
          <div className="no-scrollbar flex h-full flex-col gap-y-2.5 overflow-y-scroll lg:col-span-4">
            <ProfileInfo user={userData.user} other={true} />
            <ProfileTabs posts={userPosts} comments={userComments} />
          </div>
          <div className="col-span-2 hidden gap-y-3 lg:flex lg:flex-col">
            <SearchBar />
            <TrendList />
            <SuggestedUsers />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
