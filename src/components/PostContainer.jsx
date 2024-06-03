import { UserContext } from "../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext, useState } from "react";

export function PostContainer() {
  const [data, setData] = useState("hello world");
  const userContextData = useContext(UserContext);

  return (
    <div>
      <PostContent data={data} />
      <div>{userContextData.displayname}</div>
    </div>
  );
}
