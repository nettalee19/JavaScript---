const library = [
    {
        author: "Bill Gates", title: "The Road Ahead", readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false
    }
];

function canRead(library) {
    // library.forEach((book)=>{
    //     if(book.readingStatus){
    //         console.log(book);
    //     }
    // })

    library.filter((book) => {
        return book.readingStatus === true;
    })
        .map((book) => {
            console.log(book);
        })


}

canRead(library);
