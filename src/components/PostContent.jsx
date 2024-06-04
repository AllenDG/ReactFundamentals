import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";
import { PostContentButton } from "./PostContentButton";

export function PostContent({ data }) {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>Post Content</span>
      </div>
      <PostContentButton />
      {userContextData.email}
    </div>
  );
}
