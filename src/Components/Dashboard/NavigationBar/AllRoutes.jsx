import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Experience from "../../Experience/Experience";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

import './style.css';

const AllRoutes = () => {

 
                   
  return (
    <div id="AllRoutes">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
                <div className="Portfolio">
                 
                  <Dashboard />
                  
                </div>
            }
          ></Route>
          <Route
            path="/Home"
            element={
                <div className="Portfolio">
                  <Dashboard />
                </div>
            }
          ></Route>
          <Route
            path="/Experience"
            element={
              <div className="Portfolio">
                <Experience/>
              </div>
            }
          ></Route>
          <Route
            path="/Work"
            element={
              <div className="Portfolio">
                <Blog/>
              </div>
            }
          ></Route>
          <Route
            path="/Blog"
            element={
              <div className="Portfolio">
                <Blog/>
              </div>
            }
          ></Route>
          <Route
            path="/Contact"
            element={
              <div className="Portfolio">
                <Contact/>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
