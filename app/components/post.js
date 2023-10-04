import { Avatar } from "@rewind-ui/core";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

export default function Post() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center gap-x-3">
        <Avatar />
        <h1>name</h1>
        <h1 className="text-sm font-light">@account - 12m</h1>
      </div>
      <h1 className="mx-auto text-start text-black md:ml-16 md:w-4/6 lg:w-11/12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>
      <div className="ml-3 flex justify-around">
        <BsChat className="hover:text-primary" size={20} />
        <AiOutlineRetweet className="hover:text-primary" size={20} />
        <AiOutlineHeart className="hover:text-primary" size={20} />
      </div>
    </div>
  );
}
