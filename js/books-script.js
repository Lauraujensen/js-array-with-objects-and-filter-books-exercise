'use strict';

const books = [
    {title: '1984', author: 'George Orwell', genre:'fantasy', year: 1949, pages: 328, img:'/img/1984.webp'},

    {title: 'A brief history of time', author: 'Stephen Hawking', genre:'science', year: 1988, pages: 272, img:'/img/a-brief-history-of-time.webp'},

    {title: 'A game of thrones', author: 'George R. R. Martin', genre:'fantasy', year: 1997, pages: 864, img:'/img/a-game-of-thrones.webp'},

    {title: "A people's history of the United States", author: 'Howard Zinn', genre:'history', year: 2015, pages: 729, img:'/img/a-peoples-history-of-the-united-states.webp'},

    {title: 'Becoming', author: 'Michelle Obama', genre:'non-fiction', year: 2021, pages: 464, img:'/img/becoming.webp'},

    {title: 'Cosmos', author: 'Lucia Odoom', genre:'fiction', year: 2024, pages: 156, img:'/img/cosmos.webp'},

    {title: 'Dracula', author: 'Bram Stoker', genre:'horror', year: 2015, pages: 408, img:'/img/dracula.webp'},

    {title: 'Educated', author: 'Tara Westover', genre:'non-fiction', year: 2015, pages: 368, img:'/img/educated.webp'},

    {title: 'Essentials of classic Italian cooking', author: 'Marcella Hazan', genre:'cookbook', year: 2010, pages: 736, img:'/img/essentials-of-classic-italian-cooking.webp'},

    {title: 'Frankenstein', author: 'Mary Shelley', genre:'horror', year: 2014, pages: 244, img:'/img/frankenstein.webp'},

    {title: 'Gene', author: 'Siddhartha Mukherjee', genre:'science', year: 2016, pages: 608, img:'/img/gene.webp'},

    {title: 'Guns, germs and steel', author: 'Jared Diamond', genre:'science', year: 1997, pages: 656, img:'/img/guns-germs-and-steel.webp'},

    {title: "Harry Potter and the Sorcerer's Stone", author: 'J. K. Rowling', genre:'fantasy', year: 1997, pages: 320, img:'/img/harry-potter-and-the-sorcerers-stone.webp'},

    {title: 'Pride and Prejudice', author: 'Jane Austen', genre:'fiction', year: 1813, pages: 384, img:'/img/pride-and-prejudice.webp'},
];

const booksContainer = document.getElementById('books-container');

const selectedCategory = document.getElementById('category-select');

function displayBooks(bogListe) { 
    booksContainer.innerHTML = ''; // Tømmer containeren for at undgå duplikering

    bogListe.forEach((book) => { // book i ental, så det giver mening
        const bookElement = document.createElement('article'); 
       
        bookElement.innerHTML = `
        <h3> ${book.title} </h3>
        <p> Genre: ${book.genre}</p>
        <p> Forfatter: ${book.author}</p>
        <p> Årstal: ${book.year}</p>
        <p> Sider: ${book.pages}</p>

        <figure>
            <img src='${book.img}' alt='${book.title}'>
        </figure>`;

        booksContainer.appendChild(bookElement); // Korrekt variabelnavn
    });
}


displayBooks(books);

selectedCategory.addEventListener('change', () =>{// addEventListener lytter til change - at noget skal ændre sig. Det den skal gøre, bliver kodet nedenunder:

    const selectedValue = selectedCategory.value; // Henter den valgte kategori/genre

    let filteredBooks;

    if(selectedValue == 'all'){
        filteredBooks = books;
    }
    else{
        filteredBooks = books.filter(books => books.genre === selectedValue);
    }

    displayBooks(filteredBooks);
}) 