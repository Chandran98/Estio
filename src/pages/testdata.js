import { React, useState, useEffect } from "react";

function Ester() {
  const [post, setPost] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPost(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
        <>{post.map((data,i) => (
          
          <div key={i} className=" bg-gray-700 h-32 w-72">
          <div className=" p-5 bg-red text-lg text-red-900 m-3">
          <div className="  m-2">{data.id}</div>
          <div className="  m-2">{data.title}</div>
          </div>
            <div className=" p-5 bg-red  text-3xl  text-red-900 m-3">Class</div>
          </div>
              ))}</>
  );
}

export default ester;
