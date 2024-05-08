import React from "react";
import portfolio from "../items/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4">
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
  );
}

export default Portfolio;
