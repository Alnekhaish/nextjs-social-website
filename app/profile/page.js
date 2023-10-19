import Sidebar from "@/app/components/sidebar";
import SearchBar from "../components/searchBar";
import TrendList from "../components/trendList";
import SuggestedUsers from "../components/suggestedUsers";
import ProfileInfo from "../components/profileInfo";
import ProfileTabs from "../components/profileTabs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Home",
  description: "...",
};

async function getUserData() {
  const token = cookies().get("token");
  if (token) {
    try {
      const res = await fetch("http://localhost:8000/users/details", {
        method: "GET",
        headers: { Authorization: `bearer ${token.value}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
}
async function getUserPosts(username) {
  const token = cookies().get("token");
  if (token) {
    try {
      const response = await fetch(
        `http://localhost:8000/users/${username}/posts`,
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
        `http://localhost:8000/users/${username}/comments`,
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

export default async function Home() {
  const userData = await getUserData();
  const userPosts = await getUserPosts(userData.user.username);
  const userComments = await getUserComments(userData.user.username);

  return (
    <div className="h-screen">
      <Sidebar>
        <div className="grid h-full lg:grid-cols-6 lg:gap-x-10">
          <div className="no-scrollbar flex h-full flex-col gap-y-2.5 overflow-y-scroll lg:col-span-4">
            <ProfileInfo user={userData.user} />
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
