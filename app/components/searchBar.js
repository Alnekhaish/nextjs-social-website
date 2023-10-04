import { InputGroup } from "@rewind-ui/core";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div>
      <InputGroup>
        <InputGroup.Input
          className="border-1"
          placeholder="Search..."
          color=""
          withRing={false}
        />
        <InputGroup.Text className="cursor-pointer bg-primary hover:bg-blue-900 active:bg-blue-900">
          <FaSearch className="text-white" />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}
