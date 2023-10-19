import { Avatar, Button } from "@rewind-ui/core";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { getDateDifference } from "../utils/helper";

export default function Comment({ comment }) {
  return (
    <div className="ml-5 flex w-full flex-col gap-y-3">
      <div className="flex items-center gap-x-3">
        <Avatar src={comment.author.profile.avatar} />
        <h1>{`${comment.author.profile.first_name} ${comment.author.profile.last_name}`}</h1>
        <h1 className="text-sm font-light">
          @{comment.author.username} - {getDateDifference(comment.createdAt)}
        </h1>
      </div>
      <h1 className="ml-16 w-fit text-black">{comment.content}</h1>
    </div>
  );
}
