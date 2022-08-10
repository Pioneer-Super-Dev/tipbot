import React from "react";
import TwitterLogin from "react-twitter-login";
import { Button } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { RiWallet3Fill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Signup() {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <div>
      <div className="container text-center">
        <div className="text-start">
          <Link to="/">
            <Button
              className="signin-twitter"
              variant="outline-primary"
              size="lg"
            >
              <IoMdArrowRoundBack /> Back
            </Button>
          </Link>
        </div>
        <div className="title">SignUp Tipbot</div>

        <div className="sg-panel">
          <Button
            className="signin-twitter"
            variant="outline-primary"
            size="lg"
          >
            Connect Wallet <RiWallet3Fill />
          </Button>
          <TwitterLogin
            children={
              <Button
                className="signin-twitter"
                variant="outline-primary"
                size="lg"
              >
                Sign up with Twitter <BsTwitter />
              </Button>
            }
            authCallback={authHandler}
            consumerKey={"PyHxgJuyORZqhDiuKAne8LcxT"}
            consumerSecret={
              "RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
            }
          />
        </div>
      </div>
    </div>
  );
}
