const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    // console.log(storedBooks);
    
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveWishlist = id => {
    const storedWishlist = getStoredWishlist();
    const exists = storedWishlist.find(bookId => bookId === id)
    // console.log(exists);
    
    if(!exists){
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
    }
}

export {getStoredWishlist, saveWishlist};