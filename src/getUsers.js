import fetch from "isomorphic-fetch";

export const getUsers = () => {
  return fetch("https://62207825ce99a7de195a7c46.mockapi.io/api/users").then(
    response => response.json()
  );
};
