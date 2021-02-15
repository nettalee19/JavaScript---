library = [
  {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: false
  }
  ];



  // const isRead = (library) => {
  //   console.log(library);
  // }

  // console.log(isRead(library))



  const isRead = (library) => {
    library.forEach(book => {
      if(book.readingStatus === true){
        console.log(book.title);
      }
      // if(book.readingStatus === true){
      //   console.log(book);
      // }

    })  
    
  }

  console.log(isRead(library))