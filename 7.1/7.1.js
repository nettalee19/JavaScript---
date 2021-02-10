
const bookPrint = (book) => {
  // return book;
  return(`The book ${book.name} was written by ${book.author} in the year ${book.year}`)
}

let book = {
  name:"Harry Potter", 
  author:"JK Rowling", 
  year:"1997"
};

let whatBook = console.log(bookPrint(book));