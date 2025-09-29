import { useState } from "react";
import { users as persons } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";

import "./App.css";

function App() {
  const [users, setUsers] = useState(persons);
  const [childrenText] = useState("A hobi mi je plivanje.");

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });

    setUsers({ newUsers });
  };

  return (
    <div className="App">
      <h1>React aplikacija - V9</h1>
      <p>Ovo zaista radi</p>
      <UserFunction ime={users[0].name} years={users[0].years} />
      <UserClass ime={users[1].name} years={users[1].years} />
      <UserChildren ime={users[2].name} years={users[2].years}>
        {childrenText}
      </UserChildren>
      <button onClick={btnClickHandler}>Uvećaj godine</button>
    </div>
  );
}
export default App;
