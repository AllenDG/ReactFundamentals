import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { PostContentButton } from "./components/PostContentButton";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "allenDG",
    email: "AllenDG@Gmail.com",
    displayname: "AllenDev",
  });
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}
