import React from "react";

function Contact() {
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span> afetsib@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (024) 9175-700
          </div>
          <div>
            <span className="text-secondary">Address: </span> Accra Digital Center,
            Accra
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
