



let book1 = {
  name:"Harry Potter", 
  author:"JK Rowling", 
  year: 1997,
  edition_year: 2009,
  translator: " Hebrew",
  publish: "Global Books",
  location: "Bangaladesh",
};

let book2 = {
  name:"Shadow of the Wind", 
  author:"Carlos Ruis Safon", 
  year: 2007,
  edition_year: 2008,
  publish: "United Books",
  location: "Belgium",
};

bookUtils = {
  getFirstPublished: function (book1, book2){
    if(book1.year > book2.year){
      return(`${book2.name} was printed first`);
    }
    else if(book1.year < book2.year){
      return(`${book1.name} was printed first`);
    }
    else{
      return(`Both ${book1.name} and ${book2.name} were printed in the same year`);
    }
  },

  setNewEdition: function(book1, book2){
    if(book1.edition_year > book2.edition_year){
      return(`${book2.name} was edited first`);
    }
    else if(book1.edition_year < book2.edition_year){
      return(`${book1.name} was edited first`);
    }
    else{
      return(`Both ${book1.name} and ${book2.name} were edited in the same year`);
    }
  },

  setLanguage: function(book1, book2){
    book1.language = "English";
    book2.language = "Spanish";

    return(`${book1.name} language is: ${book1.language}, ${book2.name} language is: ${book2.language} `);
  },

  setTranslation: function(book1){
    book1.translation = [book1.language, book1.translator];

    return(`${book1.name} translation is: ${book1.translation}`)
  },

  setPublisher: function(book){
    book1.publisher = [book1.publish, book1.location];
    book2.publisher = [book2.publish, book2.location];

    return(`${book1.name} publisher is: ${book1.publisher}, ${book2.name} publisher is: ${book2.publisher}`)
  },

  isSamePublisher: function(book1, book2){
    if(book1.publisher == book2.publisher){
      return("Publisher identical!");
    }
    else{
      return("Publisher not identical!");
    }
  }

}

let bookPublish = console.log(bookUtils.getFirstPublished(book1, book2));
let bookEdit = console.log(bookUtils.setNewEdition(book1, book2));
let bookLang = console.log(bookUtils.setLanguage(book1, book2));
let bookTrans = console.log(bookUtils.setTranslation(book1, book2));
let bookPub = console.log(bookUtils.setPublisher(book1));
let bookPubIden = console.log(bookUtils.isSamePublisher(book1,book2));