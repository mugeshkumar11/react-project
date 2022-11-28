import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./home.css";
import { Button } from "@mui/material";
const Home = () => {
  const Navigate = useNavigate();
  const [todos, settodos] = useState([]);
  useEffect(() => {
    fetchto();
  }, []);
  const fetchto = async () => {
    const rest = await fetch("https://api.spacexdata.com/v3/launches");

    const json = await rest.json();
    console.log("rest", json);
    settodos(json);
  };

 

  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div className="container">
            
            <div className="picture" key={index}>
              <h2>{item.mission_name}</h2>
              <img src={item.links.mission_patch} />
              <h3>{item.details}</h3>
              <br></br>
              <div className="btn">
                <a href={item.links.wikipedia}>
                  <Button variant="contained">Wikipedia</Button>
                </a>
                <a href={""}>
                  <Button variant="contained">MoreDetail</Button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
