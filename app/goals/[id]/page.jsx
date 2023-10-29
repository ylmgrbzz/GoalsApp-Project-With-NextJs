import React from "react";

async function fetchGoals(id) {
  const response = await fetch("http://localhost:3000/data.json");
  const goals = await response.json();
  return goals.find((goal) => goal.id === id);
}

const GoalDetails = async ({ params }) => {
    const goal = await fetchGoals(params.id);
  console.log(goal);
  console.log(params.id);
  return (
    <div>
      <h1>{goal?.name}</h1>
      <p>{goal?.target}</p>
      <p>{goal?.requiredItems}</p>
    </div>
  );
};

export default GoalDetails;
