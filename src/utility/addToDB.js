import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedReadListStr = localStorage.getItem("read-list");

  if (storedReadListStr) {
    const storedReadList = JSON.parse(storedReadListStr);
    return storedReadList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const getReadList = getStoredReadList();

  if (getReadList.includes(id)) {
    toast.error("Already added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    getReadList.push(id);
    const readListStr = JSON.stringify(getReadList);
    localStorage.setItem("read-list", readListStr);
    toast("successfully added in your read list");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const getWishList = getStoredWishList();

  if (getWishList.includes(id)) {
    toast.error("Already added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    getWishList.push(id);

    const wishListStr = JSON.stringify(getWishList);

    localStorage.setItem("wish-list", wishListStr);
    toast("successfully added in your read list");
  }
};

export {
  addToStoredReadList,
  getStoredReadList,
  addToStoredWishList,
  getStoredWishList,
};
