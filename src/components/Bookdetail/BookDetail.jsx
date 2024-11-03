import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDB";

const BookDetail = () => {

  const handleMarkAsRead = (id) =>{
    addToStoredReadList(id);
  }

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  }

  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="bg-base-200 p-16 rounded-2xl">
        <img className="" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <h6 className="font-medium text-xl">{author}</h6>
        <div className="border-b"></div>
        <div className="font-medium text-xl">{category}</div>
        <div className="border-b"></div>
        <div> <span className="font-bold ">Review:</span> <p className="inline">{review}</p></div>
        <div className="flex">
        <div className="font-bold mr-7">Tag</div>
          <div className="flex gap-3">
          {tags.map((tag, index) => (
            <span className="bg-[#d8ffd2] py-0.5 px-3 rounded-xl text-[#23BE0A] font-medium" key={index}>{tag}</span>
          ))}
          </div>
        </div>
        <div className="border-b"></div>
        <div className="flex gap-10 flex-grow">
          <ul className="space-y-1">
            <li>Number of Pages:</li>
            <li>Publisher:</li>
            <li>Year of Publishing:</li>
            <li>Rating:</li>
          </ul>
          <ul className="font-semibold space-y-1">
            <li>{totalPages}</li>
            <li>{publisher}</li>
            <li>{yearOfPublishing}</li>
            <li>{rating}</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => handleMarkAsRead(id)} className="border font-semibold text-lg hover:bg-base-300 rounded-lg py-2">Mark as Read</button>
          <button onClick={() => handleAddToWishList(id)} className="bg-[#50B1C9] hover:bg-[#27d4ff] text-white font-semibold text-lg rounded-lg py-2">Add to Wish List</button>
        </div>
      </div>
    </div>
  );
};

BookDetail.propTypes = {};

export default BookDetail;
