import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";
import { PostContentButton } from "./PostContentButton";

export function PostContent({ data }) {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <PostContentButton data={data} />
      {userContextData.email}
    </div>
  );
}
