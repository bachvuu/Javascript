const USER_ID = 1;
export const getTodos = () => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/todos?userID={ USER_ID }`
  );
};
