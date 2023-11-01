import React from "react";
import ReactDOM from "react-dom/client";

import {Link} from "react-router-dom";

function Navbar() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home </Link>
      <Link class="nav-item nav-link" to="/Card">Card </Link>
      <Link class="nav-item nav-link" to="/Contact">Contact </Link>
    </div>
  </div>
</nav>
      </div>
    );
  }
  
  export default Navbar;