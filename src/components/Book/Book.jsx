import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, tags, rating, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
    <div className="border rounded-2xl p-7 flex flex-col space-y-5">
      <div className="bg-base-200 py-12 rounded-2xl">
        <img className="h-[150px] mx-auto" src={image} alt="" />
      </div>
      <div className="flex gap-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#d8ffd2] py-0.5 px-3 rounded-xl text-[#23BE0A] font-medium">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-2xl flex-grow">{bookName}</h3>
      <p className="font-medium">By: {author}</p>
      <div className="border-b border-dashed"></div>
      <div className="font-medium flex justify-between">
        <span>{category}</span>
        <span>{rating}</span>
      </div>
      
    </div>
    </Link>
  );
};

Book.propTypes = {};

export default Book;
