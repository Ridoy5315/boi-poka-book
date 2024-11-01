import React from "react";
import PropTypes from "prop-types";
import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-3xl px-28 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-10">
          <div className="text-6xl font-bold space-y-3">
            <h1>
              Books to freshen up
            </h1>
            <h1>
              your bookshelf
            </h1>
          </div>
          <button className="bg-[#23BE0A] text-white font-bold text-xl px-6 py-4 rounded-lg">View The List</button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
