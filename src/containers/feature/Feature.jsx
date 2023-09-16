import React from "react";
import "./feature.css";
import { Feature as FeatureComponent } from "../../components";
const Feature = () => {
  const FeaturesData = [
    {
      titile: "Improving end distruts instantly",
      text: "A paragraph is a collection of words strung together to make a longer unit than a sentence. Several sentences often make a paragraph.",
    },
    {
      titile: "Become the tended active",
      text: "There are normally three to eight sentences in a paragraph. Paragraphs can start with a five-space indentation or by skipping a line",
    },
    {
      titile: "Message or am nothing",
      text: "A paragraph is a collection of words strung together to make a longer unit than a sentence. Several sentences often make a paragraph",
    },
    {
      titile: "Realy boy law county",
      text: "Several sentences often make a paragraph. There are normally three to eight sentences in a paragraph.",
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen
        </h1>

        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {FeaturesData.map((item, index) => (
          <FeatureComponent text={item.text} title={item.titile} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
