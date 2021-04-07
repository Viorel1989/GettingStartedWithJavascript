var bookname = "";
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function addFavoriteBook(bookname){
    if (!bookname.includes("Great")){
        favoriteBooks.push(bookname);
    }
}

function printFavoriteBooks(){
    console.log('There are ${favoriteBooks.length} in your list');
    for (let favoriteBook of favoriteBooks){
        console.log(favoriteBook);
    }
}

printFavoriteBooks;
