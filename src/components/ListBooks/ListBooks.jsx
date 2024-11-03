import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListBooks = () => {
  const [sort, setSort] = useState([]);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedWishList = getStoredWishList();

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const readListData = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readListData);

    const wishListData = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishListData);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);
    if(sortType === 'Rating'){
      const sortedByRating = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  }
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {
            sort ? `Sort By ${ sort}` : 'Sort By'
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button onClick={() => handleSort('Rating')}>Rating</button>
          </li>
          <li>
          <button onClick={() => handleSort('no of pages')}>Number of pages</button>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-7 grid grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-7 grid grid-cols-3 gap-6">
            {wishList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

ListBooks.propTypes = {};

export default ListBooks;
