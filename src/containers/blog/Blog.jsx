import React from "react";

import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "../../components/brand";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happeing,We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            url={blog01}
            date={"08-09-2023"}
            title={"GPT-3 and Open AI is the future. Let us explore how it is?"}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            url={blog02}
            date={"08-09-2023"}
            title={"GPT-3 and Open AI is the future. Let us explore how it is?"}
          />
          <Article
            url={blog03}
            date={"08-09-2023"}
            title={"GPT-3 and Open AI is the future. Let us explore how it is?"}
          />
          <Article
            url={blog04}
            date={"08-09-2023"}
            title={"GPT-3 and Open AI is the future. Let us explore how it is?"}
          />
          <Article
            url={blog05}
            date={"08-09-2023"}
            title={"GPT-3 and Open AI is the future. Let us explore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
