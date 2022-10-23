
// Your Code Here
const { response } = require("express");

let response1 = await fetch('http://localhost:3001/listBooks' , {
    method: 'GET',
    headers: null,
    body: null
});

let books = await response1.json();
console.log(books);


let updateResponse = await fetch('http://localhost:9001/updateBook', {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'id': 3,
        'title': 'Legends of Arathrae',
    }),
    
});

let updatedBook = await updateResponse.json();
console.log(updatedBook);

let 