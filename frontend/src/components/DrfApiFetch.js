import React, { useState, useEffect } from "react";
import axios from "axios";
const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks", {
        headers: {
          Authorization: "Token 7bf7318f4b8306289d314db0953931ac84467f14",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrfApiFetch;
