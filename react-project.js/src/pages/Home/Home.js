import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./home.css";
import { Button} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Paginat from "./Pagination"


const Home = () => {
  const Navigate = useNavigate();
  const [todos, settodos] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(10);
  useEffect(() => {
    fetchto();
  }, []);
  const fetchto = async () => {
    const rest = await fetch("https://api.spacexdata.com/v3/launches");

    const json = await rest.json();
    console.log("rest", json);
    settodos(json);
  };
  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = todos.slice(firstpostindex, lastpostindex);

  return (
    <div className="user" >

      <div className="container">
      
        {currentpost.map((item, index) => {
          return (
            
            <div
              className="picture"
              key={index}
              style={{ display: "inline-block" }}
              
            >
              <div className={"homeflex"} style={{ textAlign: "left" }} >
                <Card sx={{ maxWidth: 350 }} >
                  
                  <CardMedia
                    component="img"
                    height="auto"
                    image={item.links.mission_patch}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.mission_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* <a href={item.details}>
                    <Button size="small">wiki</Button>
                  </a> */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={item.links.wikipedia}>
                      <Button size="small">wikipedia</Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </div>
            
          );
          
        })}
        <Paginat  totalposts = {todos.length} postperpage={postperpage} setcurrentpage={setcurrentpage} />
      </div>
    </div>
  );
};

export default Home;
