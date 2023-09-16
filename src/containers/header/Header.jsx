import React from "react";
import "./header.css";

//images
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

//BEM => Block Element Modifier
const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        {/* header : heading  */}
        <h1 className="gradient__text">
          Let's Build Someting amazing with GPT-3 OpenAI
        </h1>

        {/* header : paragraph content  */}
        <p>
          Yet bed any for travelling assitance unpleasing, Not thoughts all
          excercise blessing. Indulegence way everything joy alteration
          boisterous the attachment. Party we years to order allow asked of.
        </p>

        {/* header :email input part  */}
        <div className="gpt3__header-content__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button type="button">Get Started</button>
        </div>

        {/* header : users  */}
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1600 people requested to access a visit in last 24 hours</p>
        </div>
      </div>
      {/* //header : image  */}
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
