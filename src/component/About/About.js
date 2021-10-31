import React from "react";

function About() {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>

        <div className="about-info">
          <img
            src="img/Benedict_small.jpg"
            alt="Afetsi B. Benedict"
            className="bio-image"
          />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              <b>Afetsi Bless Benedict </b>is a Developer at Codetrain and
              currently a Professional-Teacher. I'm hardworking and always
              consistent to my Job. Over the past 3 years, I gathered much
              experience working with both Local and International companies in
              Web Development
            </p>
          </div>

          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Having Prio knowledge in Web Development. I have worked on
              different projects building interective Web pages and Database
              using tools such as PHP,PYTHON AND JAVASCRIPT
            </p>
          </div>

          <div className="job job-2">
            <h3>Designers ABC</h3>
            <h6>Front End Developer</h6>
            <p>
              I am very passionate in designs. I try as much to build Nice and
              awesome User Interfaces UI, Layouts in simple and molden Designs
              using HTML5, CSS3, JAVASCRIPT, BOOTSTRAP AND MATERIAL DESIGN
            </p>
          </div>

          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Graphic Designer</h6>
            <p>
              Graphic works are arts that showcase ones creative ideas into
              reality. Contact me for all your Graphic Design works
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
