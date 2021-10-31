import React from "react";

function Home() {
  return (
    <div>
      <main id="home">
        <h1 className="lg-heading">
          Afetsi
          <span className="text-secondary">B. Benedict</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Designer & Entrepreneur
        </h2>
        <div className="icons">
          <a href="https://twitter.com/BlessShalom">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/afetsikwami.blessbenedict?fref=nf">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/bless-benedict-afetsi-a19776b6/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/beneba">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
