import React from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Vlada', email: 'ilovehorses@gmail.com', address: {city: 'New York', street: 'Park Ave', zipcode: '10065'}},
    {id: 2, name: 'Slava', email: 'andidont@gmail.com', address: {city: 'London', street: 'Leman Street', zipcode: '625618'}},
  ];

  return (
    <div>
      <Card variant={CardVariant.outlined} width="200px" height="200px">
        <button>Button</button>
        <div>TextTextText</div>
      </Card>
      <UserList users={users}/>
    </div>
  );
};

export default App;