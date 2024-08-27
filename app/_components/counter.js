"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

//   console.log("🚀 ~ Counter ~ users:", users);

  return (
    <div>
      <p>There are {users.length} users</p>

      <button
        onClick={() => {
          if (count === 0) return;
          setCount((c) => c - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <ul>
        <li>{users[count]?.name}</li>
      </ul>
    </div>
  );
}
