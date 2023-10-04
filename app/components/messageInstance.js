import { Avatar } from "@rewind-ui/core";

export default function MessageInstance() {
  return (
    <div className="ml-1 mt-1 flex items-center gap-x-2 py-3">
      <div>
        <Avatar src="https://avatars.githubusercontent.com/u/810438?s=96&v=4" />
      </div>
      <div>
        <div className="flex w-60 flex-col md:w-80">
          <div className="flex gap-x-2">
            <h1 className="font-semibold">Account Name</h1>
            <h1 className="font-sm text-gray-500">@account</h1>
          </div>
          <h1 className="truncate font-light text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h1>
        </div>
      </div>
    </div>
  );
}
