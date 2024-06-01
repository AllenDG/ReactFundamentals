import { useState, useEffect } from "react";

export default function App() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });

  console.log(blogPostData);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success!");
                console.log(data);
              })
              .catch((err) => console.log(err));
          }
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={blogPostData.title}
            onChange={(event) => {
              setBlogPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                title: event.target.value,
              }));
            }}
          />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            value={blogPostData.body}
            onChange={(event) => {
              setBlogPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                body: event.target.value,
              }));
            }}
          />
        </div>
        <button>Create Post</button>
      </form>
    </div>
  );
}
