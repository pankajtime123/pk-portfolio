import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          target="_blank"
          href={"https://www.linkedin.com/in/pankaj-kumar-yadav-0b5aa1182/"}
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          target="_blank"
          href={"https://twitter.com/pankaj_time_"}
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          target="_blank"
          href={
            "https://www.facebook.com/people/Pankaj-Yadav/pfbid02HGpFV4sZmZTqM4zg6oH1WLJBWYJr9AyBuKty9fFPtK2TmmwmAvi3ma98A8kwF9gCl/?mibextid=ZbWKwL"
          }
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          target="_blank"
          href={"https://www.instagram.com/pankaj.yadav1/"}
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
