let myLibrary = [];

function Book(title,author,pages,wasread){
  this.title = title
  this.author = author
  this.pages = pages
  this.index = myLibrary.length + 1
  } 
  
 function buildBook(book)  {
    let bookRow = document.createElement('tr');
    let titleCell = document.createElement('td');
    let authorCell = document.createElement('td');
    let pagesCell = document.createElement('td');
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(''));
    bookRow.appendChild(td);
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    bigTable.appendChild(bookRow);
    bookRow.appendChild(titleCell);
    bookRow.appendChild(authorCell);
    bookRow.appendChild(pagesCell);
    let cell = bookRow.insertCell();
    let deleteBtn = document.createElement("INPUT");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    cell.appendChild(deleteBtn);
    deleteBtn.addEventListener('click',deleteBook);
     function deleteBook() {
      myLibrary.splice(book.index,1);
      console.log(myLibrary);
      bookRow.remove();
    }
    
  }

   




  function render() {
    bigTable.innerHTML = "";
    myLibrary.forEach(book => buildBook(book))
  }


  function populateArray(bookTitle,bookAuthor,bookPages){
   let bookRow = new Book(bookTitle,bookAuthor,bookPages);
    myLibrary.push(bookRow);
  }  

function addBook() {
  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookIndex = myLibrary.length + 1;
  let bookRow = new Book(bookTitle,bookAuthor,bookPages,bookIndex);
  myLibrary.push(bookRow);
  render();
  }



 




const addToLibrary = document.getElementById('submit');
const bigTable = document.getElementById('bigt');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

addToLibrary.addEventListener('click',addBook);





  


populateArray('Solaris','Stanislaw Lem','400');
populateArray('Dune','Frank Herbert','500');
populateArray('Snow Crash','Neal Stephenson','379');
populateArray('Metro 2033','Dmitry Glukhovsky','500');
populateArray('The Left Hand of Darkness','Ursula K. Le Guin','600');

console.log(myLibrary);
render();

