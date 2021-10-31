import React from "react";
import {  Link } from "react-router-dom";
import "../../main"

function Work() {
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
             <Link to = "#!"> 
              
              <img src="img/projects/ameco-sch.jpg" alt="Ameco school site" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> COLLEGE WEBSITE
             </Link >
             <Link to = "/"
              className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project5 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/beneba.jpg" alt="Bless site" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i>BENEBA WEBSITE
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project6 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/islamic.jpg" alt="Ismalic site" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> ISMALIC WEBSITE
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project11 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/mytunes.png" alt="Itunes" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> MYTUNES WEBSITE
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project3 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/tour.jpg" alt="Travel and tour" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> TRAVEL & TOUR
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project9 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/login.jpg" alt="Sign up" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> SIGN UP PAGE
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>
          {/* project7 */}
          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/mygame.jpg" alt="Game App" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> TYPING GAME
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project8 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/music.jpg" alt="Music app" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> MUSIC APP
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project4 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/depaul.jpg" alt="Depaul university" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> DEPAUL UNIVERSITY
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          {/* project2 */}

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/project2.jpg" alt="Project" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> Project
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>

          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/project4.jpg" alt="Project" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> Project
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>
          <div className="item">
             <Link to = "#!"> 
              <img src="img/projects/college.jpg" alt="Ameco" />
             </Link >
            <Link to = "/" className="btn-light">
              <i className="fas fa-eye"></i> AMECO WEBSITE
             </Link >
            <Link to = "/" className="btn-dark">
              <i className="fab fa-github"></i> Github
             </Link >
          </div>
        </div>
      </main>
    </div>
  );
}

export default Work;
