import { UserContext } from "../utils/contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext, useState } from "react";

export function PostContainer() {
  const [data, setData] = useState("hello world");
  const userContextData = useContext(UserContext);

  console.log(userContextData);

  return (
    <div>
      <div>
        <span>PostContainer</span>
      </div>
      <div>{userContextData.displayname}</div>
      <PostContent data={data} />
    </div>
  );
}
