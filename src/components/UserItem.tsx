import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <ul key={user.id} style={{ padding: 15, border: "1px solid grey" }}>
        <li style={{ listStyle: "none", marginBottom: "15px" }}>
          {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
          {user.address.street}
        </li>
      </ul>
    </div>
  );
};
