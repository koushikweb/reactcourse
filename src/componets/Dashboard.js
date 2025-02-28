import React, { useEffect, useState } from "react";

const Dashboard = ({ list }) => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10").then(
          (response) => {
            response.json().then((data) => {
              setUserData(data?.country || []);
            });
          }
        );
      } catch (err) {
        setError(error);
      }
    };
    fetchUser();
  }, [error]);
  return (
    <div className="Container">
      <h1>{`User List`} </h1>
      {console.log(`userdata arr ${userData}`)}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
          </tr>
        </thead>
        {userData?.map((u, idx) => (
          <tr key={u.id}>
            <td>{u.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Dashboard;
