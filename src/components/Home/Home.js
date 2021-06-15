import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {

  // let g01aWidthScaling = "0.9";
  // let g01aHeightScaling = "0.4";
  // let vptW = window.innerWidth;
  // let vptH = window.innerHeight;
  // let g01aW = +g01aWidthScaling * vptW;
  // let g01aH = +g01aHeightScaling * vptH;

  return (
    <div className="container m-5" width="100px">
      <h1 width="300px">Data To Go:</h1>
      <p width="300px">
        You now have the ability to view, edit, and populate important 
        business metrics on the go.
      </p>
      <p width="300px">
        Choose which metric to get started with:
      </p>
      <h3><Link to="/quality">Quality</Link></h3>.
      <h3><Link to="/quantity">Quantity</Link></h3>.
    </div>
  )
}

export default Home;