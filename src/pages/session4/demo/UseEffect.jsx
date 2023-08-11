import React, { useEffect, useState } from "react";

const tabs = ["posts", "photos", "albums"];

export default function UseEffect() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  //1.useEffect(callback)
  //Gọi callback mỗi khi component re-render
  //Gọi callback sau khi thêm component vào DOM
  //2.useEffect(callback, [])
  //Chỉ gọi callback 1 lần sau khi component mounted
  //3.useEffect(callback, [deps])
  //Callback sẽ được gọi lại mõi khi deps thay đổi

  //side effect
  useEffect(() => {
    console.log("Mounted");
    document.title = title;
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        setPosts(post);
      });
  }, [type]);

  //render giao diện UI trước khi gọi side effect
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div style={{ padding: 30 }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={
                type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          {/* {console.log("render")} */}
          <ul>
            {posts.map((post, index) =>
              post.url ? (
                <li key={index}>
                  <img src={post.url} alt={post.title} />
                </li>
              ) : (
                <li key={index}>{post.title}</li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
