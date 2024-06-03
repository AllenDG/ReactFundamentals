import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  return (
    <UserContext.Provider
      value={{
        id: 1,
        username: "allenDG",
        email: "AllenDG@Gmail.com",
        displayname: "AllenDev",
      }}
    >
      <div>
        <PostContainer />
      </div>
    </UserContext.Provider>
  );
}
