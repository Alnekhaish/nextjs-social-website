import Sidebar from "@/app/components/sidebar";
import SearchBar from "../components/searchBar";
import MessageInstance from "../components/messageInstance";
import NewMessage from "../components/newMessage";

export default function Messages() {
  return (
    <div className="h-screen">
      <Sidebar>
        <div className="grid h-screen divide-x lg:grid-cols-6 lg:gap-x-10">
          <div className="no-scrollbar flex h-screen flex-col gap-y-2.5 overflow-x-visible overflow-y-scroll lg:col-span-2">
            <div className="sticky top-0 z-50">
              <SearchBar />
            </div>

            <div className="flex flex-col gap-y-3 divide-y">
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
              <MessageInstance />
            </div>
          </div>
          <div className="col-span-4 hidden gap-y-3 lg:flex lg:flex-col">
            <NewMessage />

          </div>
        </div>
      </Sidebar>
    </div>
  );
}
