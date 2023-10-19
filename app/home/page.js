import Sidebar from "@/app/components/sidebar";
import NewPost from "@/app/components/newPost";
import Timeline from "../components/timeline";
import SearchBar from "../components/searchBar";
import TrendList from "../components/trendList";
import SuggestedUsers from "../components/suggestedUsers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  } else {
    redirect("/login");
  }
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="h-screen">
      <Sidebar>
        <div className="grid h-full lg:grid-cols-6 lg:gap-x-10">
          <div className="no-scrollbar mx-auto flex h-full w-full flex-col gap-y-2.5 overflow-x-hidden overflow-y-scroll lg:col-span-4">
            <NewPost avatar={userData.user.profile.avatar} />
            <Timeline />
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
