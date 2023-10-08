import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [query, setQuery] = useState(null);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          console.warn(result);
          setQuery(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        setMode("offline");
        let collection = localStorage.getItem("users");
        setQuery(JSON.parse(collection));
      });
  }, []);
  return (
    <>
      <h1>title</h1>
      {mode === "offline" && <h3>you are offline mode </h3>}
      {query &&
        query.map((item) => (
          <>
            <p key={item.id}>{item.name}</p>
          </>
        ))}
    </>
  );
};

export default Users;
