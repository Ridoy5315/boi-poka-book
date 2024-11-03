const getStoredReadList = () => {

     const storedReadListStr = localStorage.getItem('read-list');

     if(storedReadListStr){
          const storedReadList = JSON.parse(storedReadListStr);
          return storedReadList;
     }
     else{
          return [];
     }
}

const addToStoredReadList = (id) => {

     const getReadList = getStoredReadList();

     if(getReadList.includes(id)){
          return;
     }
     else{
          getReadList.push(id);
          const readListStr = JSON.stringify(getReadList);
          localStorage.setItem('read-list', readListStr);
     }
}


const getStoredWishList = () => {
     const storedWishListStr = localStorage.getItem('wish-list');

     if(storedWishListStr){
          const storedWishList = JSON.parse(storedWishListStr);
          return storedWishList;
     }
     else{
          return [] ;
     }
}

const addToStoredWishList = (id) => {

     const getWishList = getStoredWishList();

     if(getWishList.includes(id)){
          return;
     }
     else{
          getWishList.push(id);

          const wishListStr = JSON.stringify(getWishList);

          localStorage.setItem('wish-list', wishListStr);
     }
}

export {addToStoredReadList, addToStoredWishList};