import Link from "next/link";
import React from "react";

const GoalList = ({ goals }) => {
  console.log(goals);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        
      }}
    >
      {goals.map((goal) => (
        <Link style={{
          textDecoration:"none",
          color:"white",
          margin:"10px",
          borderRadius:"10px",
          background:"#1995ff"

        }} href={`/goals/${goal?.id}`} key={goal?.id}>
          <div
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              background:"white",
              color:"black",
            }}
          >
            {goal?.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GoalList;
