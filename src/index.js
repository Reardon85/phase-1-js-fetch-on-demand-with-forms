const init = () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => { 
        event.preventDefault();
        const book = event.target.children[1].value;
        renderBook(book);

    })
  
}

function renderBook(bookID){

    const bookSection = document.querySelector("#movieDetails");
    const title = bookSection.children[0];
    const summary = bookSection.children[1];
    console.log(bookID)
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(books => {
        console.log(books)
        books.forEach(book => { 
            console.log(book.id)
            if(book.id == bookID){
                console.log("yay")
                title.innerText = book.title;
                summary.innerText = book.summary;
            }
        });
    })

    
    //bookSection.children[0].append(title)
    //bookSection.children[1].append(summary)

}

document.addEventListener('DOMContentLoaded', init);