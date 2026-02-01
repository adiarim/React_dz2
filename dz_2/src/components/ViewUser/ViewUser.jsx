import React from "react";
import "./style.css";
import first from "../../assets/gon.jpg";

const ViewUser = () => {
  const list_users = [
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    },
    {
      name: "Gon",
      age: 13,
      job: "Hunter",
      url: first,
      description: "Hunter x Hunter character",
    }
  ];

  const handleCardClick = (user) => {
    console.log("object characters:", user);
  };

  return (
    <div className="main_block">
      {list_users.map((item, index) => {
        return (
          <div 
            className="every_user" 
            key={index} 
            onClick={() => handleCardClick(item)} 
          > 
            {index < 10 && <b style={{color: "green"}}>Premium</b>}
            
            <img src={item.url} alt={item.name} />
            <h5 className="every_user__name">{item.name}</h5>
            <p className="every_user__age">Возраст: {item.age}</p>
            <p className="every_user__job">{item.job}</p>
            <p className="every_user__desc">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewUser;