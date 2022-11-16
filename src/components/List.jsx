import { useEffect, useState } from "react";
import { getUsers } from "../getUsers";

export const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUsers();
        const users = await response.json();
        setUsers(users);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <ul>{users.length > 0 && users.map(({ id, name }) => <li>{name}</li>)}</ul>
  );
};
