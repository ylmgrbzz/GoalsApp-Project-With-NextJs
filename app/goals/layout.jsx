import React from "react";
import GoalList from "./GoalList";
async function fetchGoals() {
  const response = await fetch("http://localhost:3000/data.json");
  const goals = await response.json();
  return goals;
}

const GoalsLayout = async ({children}) => {
  const goals = await fetchGoals();

  return (
    <div style={{ display: "flex", flex: "1" }}>
      <aside
        style={{
          display: "flex",
          flex: "0.3",
          borderRight: "1px solid black",
          height: "100vh",
        }}
      >
        <GoalList goals={goals} />
      </aside>
      <div
        style={{
          display: "flex",
          flex: "0.7",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >{
        children
      }</div>
    </div>
  );
};

export default GoalsLayout;
