// import axios from "axios";
// import React from "react";
// import useSWR from "swr";
// const fetcher = (url) => axios.get(url).then((res) => res.json());
// function Api() {
//   const url =
//     "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=383052d6fd3070e589221a3c2f4c38297c5f7fe623bc820dd8fc9ab20cd7b2f0";

//   const { data,  error,isLoading } = useSWR("https://jsonplaceholder.typicode.com/todos/", fetcher);
//   console.log(data.USD)
//   console.log(error)
 
//   return <div>api</div>;
// }

// export default Api;

// import useSWR from 'swr';
// import axios from 'axios';

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// function MyComponent() {
//   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       {data.map((post) => (
//         <div key={post.id}>
//           <h2 className=' font-bold'>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;


import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const postNewData = async (newData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
  return response.data;
};

function MyComponent() {
  const { data, error, mutate } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newData = {
      title: formData.get('title'),
      body: formData.get('body'),
      userId: 1, // hardcoded user ID for demo purposes
    };

    try {
      const postedData = await postNewData(newData);
      mutate([...data, postedData], false); // add the new data to the existing data and revalidate
    } catch (error) {
      console.error('Failed to post new data:', error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>My Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> - {item.body}
            </li>
          ))}
        </ul>
        <h2>Add New Data</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea id="body" name="body" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
