import React from "react";
import portfolio from "../items/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    // Portfolio Section of the website
    <div id="project">
      {/* Title of the Portfolio Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto py-16">
        {/*Laying out the grid for the portfolio items*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item) => (
            <PortfolioItem
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
