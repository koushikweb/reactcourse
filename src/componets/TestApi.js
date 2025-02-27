import React, { useState } from "react";

const TestApi = async () => {
  const [data, setData] = useState([]);

  await fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10")
    .then((data) => {
      if (data) {
        setData(data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("fetch complete");
    });

  return (
    <div>
      <h1>Test API</h1>
      {data?.map((d, idx) => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TestApi;
