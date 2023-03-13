import React, { useState } from "react";

const PostCall = () => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitValues = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2)
      })
    };
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      requestOptions
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserId(0);
        setTitle("");
        setBody("");
      });
  };

  const submit = (e) => {
    e.preventDefault();
    submitValues();
  };

  return (
    <>
      <form>
        <label>User ID</label> <br />
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Body</label>
        <br />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button onClick={submit}>Submit</button>
        <br />
      </form>
    </>
  );
};

export default PostCall;
