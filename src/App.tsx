import React, { useState } from "react";
import { Card, CardVariants } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";
import { useEffect } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
};

export default App;
