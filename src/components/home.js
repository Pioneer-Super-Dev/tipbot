import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container text-center">
        <div className="title">Send tips on Twitter</div>
        <div className="under-title">with SPARK!</div>

        <Link to="/signup">
          <Button
            className="signin-twitter"
            variant="outline-primary"
            size="lg"
          >
            Sign up
          </Button>
        </Link>
      </div>
      <div className="qa-panel text-center">
        <div className="question">How to receive tips:</div>
        <div className="answer">
          Simply sign up with the TipBot so it knows who you are and what XRPL
          address you want to use to receive your tips. Then, wait for people to
          tip you!
        </div>

        <div className="question">How to send tips:</div>
        <div className="answer">
          First, make sure you have signed up with the TipBot so it knows who
          you are and what XRPL address you want to use to send tips. Then,
          tweet a new message or reply to an existing message, in the following
          format:
        </div>
      </div>
    </div>
  );
}
