import Sidebar from "@/app/components/sidebar";
import SearchBar from "../components/searchBar";
import TrendList from "../components/trendList";
import SuggestedUsers from "../components/suggestedUsers";
import ProfileInfo from "../components/profileInfo";
import ProfileTabs from "../components/profileTabs";

export const metadata = {
  title: "Home",
  description: "...",
};

export default function Home() {
  return (
    <div className="h-screen">
      <Sidebar>
        <div className="grid h-screen lg:grid-cols-6 lg:gap-x-10">
          <div className="no-scrollbar flex h-screen flex-col gap-y-2.5 overflow-y-scroll lg:col-span-4">
            <ProfileInfo />
            <ProfileTabs />
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
