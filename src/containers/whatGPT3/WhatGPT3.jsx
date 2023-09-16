import React from "react";
import "./whatGpt3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What isGPT-3"}
          text={
            "GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large"
          }
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond Your imagination{" "}
        </h1>

        <p>Explor The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Chatbots"}
          text={
            "GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network"
          }
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to"
          }
        />
        <Feature
          title={"Education"}
          text={
            "machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large"
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
