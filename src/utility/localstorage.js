const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('books');
    // console.log(storedBooks);
    
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBook = id => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id)
    // console.log(exists);
    
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}

export {getStoredBooks, saveBook};