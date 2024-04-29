import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="background-home">
      <div className="content-home">
        <h1 className="home-title">Anotador<br/>de truco</h1>
        <p className="by">by Chipi</p>
        <Link to="/anotador" className="button-home">Comenzar</Link>
      </div>
    </div>
  );
};

export default Home;
