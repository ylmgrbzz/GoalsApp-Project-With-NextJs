import React from "react";

async function fetchGoals(id) {
  const response = await fetch("http://localhost:3000/data.json");
  const goals = await response.json();
  return goals.find((goal) => goal.id === id);
}

const GoalDetails = async ({ params }) => {
  console.log(params.id);
  const goal = await fetchGoals(params.id);
  return (
    <div>
      <h1>{goal?.name}</h1>
      <p>{goal?.target}</p>
    </div>
  );
};

export default GoalDetails;
