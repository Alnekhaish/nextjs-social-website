import Sidebar from "@/app/components/sidebar";
import EditProfile from "../components/editProfile";

export default function Messages() {
  async function getUser() {}

  return (
    <div className="h-screen">
      <Sidebar>
        <div className="flex h-screen flex-col items-center md:justify-center">
          <EditProfile />
        </div>
      </Sidebar>
    </div>
  );
}
