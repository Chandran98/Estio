import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

function Ester() {
  const [post, setPost] = useState([]);

  const apiData = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    const { data: res } = await axios.post(apiData);
    setPost(res);
  };

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  const postdata = async (data) => {
    const posted = { title: data };
    console.log(post);
    await axios.post(apiData, posted);
    setPost([posted]);
    console.log(posted);
  };

  return (
    <>
      <div className=" bg-gray-700 h-32 w-72">
        <button onClick={() => postdata(" dsfasd fdaf as")}> dsfdsf</button>
        <div className=" p-5 bg-red text-lg text-red-900 m-3">
          <div className="  m-2">{data.id}</div>
          <div className="  m-2">{data.title}</div>
        </div>
      </div>
      <div> </div>
      {/* {post.map((data) => (
       
      ))} */}
    </>
  );
}

export default ester;
