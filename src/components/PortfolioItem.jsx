import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    // Portfolio Item
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 rounded-md overflow-hidden"
    >
      {/* Image of the Portfolio Item */}
      <img
        src={imgUrl}
        alt="portfolio item"
        className="w-full h-36 md:h-46 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        {/* Title and Stack of the Portfolio Item */}
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semobold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flew-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
