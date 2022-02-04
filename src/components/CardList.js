import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className=" grid gap-4 grid-cols-3 items-center">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
