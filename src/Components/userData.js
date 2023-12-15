import React from "react";
import { useState } from "react";
import UserDetails from "./UserDetails";
import "./userData.css";
import "./Loader.css";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonResponse = await response.json();
      setUsers(jsonResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("users", users);
  console.log("users data", users.data);
  return (
    <div className="main-container">
      <h1 className="heading">Hello All</h1>
      <button
        className="glow-on-hover"
        onClick={loadUsers}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Get Users"}
      </button>
      <h2>Users:</h2>

      <section>
        {isLoading ? (
          <p>
            <span class="loader"></span>
          </p>
        ) : (
          Array.from(users).map((obj) => (
            <UserDetails key={Math.random()} details={obj} />
          ))
        )}
      </section>
    </div>
  );
};

export default UserData;
