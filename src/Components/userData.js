import React from "react";
import { useState } from "react";
import UserDetails from "./UserDetails";
import "./userData.css";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    console.log("JSON RESPONSE", jsonResponse.data);
    setUsers(jsonResponse.data);
  };
  console.log("users", users);
  console.log("users data", users.data);
  return (
    <div className="main-container">
      <h1 className="heading">Hello All</h1>
      <button className="glow-on-hover" onClick={loadUsers}>
        Get Users
      </button>
      <h2>Users:</h2>
      {/* <UserDetails/> */}

      <section>
        {console.log("Im printing")}
        {Array.from(users).map((obj) => (
          <UserDetails key={Math.random()} details={obj} />
        ))}
      </section>
    </div>
  );
};

export default UserData;
