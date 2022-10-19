import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <p>
        Thanks for your interest in getting in touch!
        <br />
        Want to say "Hey!"? Got something you'd like to ask? New project or
        opportunity? Want to hire me? please use the form below
      </p>
      <div>
        <div>{/* <Button variant="dark">Hello</Button> */}</div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
