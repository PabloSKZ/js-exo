const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


/* Question 1 */

rented_once = true;
for (i = 0; i < books.length; i++) {
    if (books[i].rented == 0){
        rented_once = false;
    }
}
console.log("Tous les livres ont-ils étaient emprunté au moins une fois ? --> " + rented_once)


/* Question 2 */

most_rented = books[0]
for (i = 0; i < books.length; i++) {
    if (books[i].rented > most_rented.rented) {
        most_rented = books[i]
    }
}

console.log(most_rented)


/* Question 3 */

less_rented = books[0]
for (i = 0; i < books.length; i++) {
    if (books[i].rented < less_rented.rented) {
        less_rented = books[i]
    }
}

console.log(less_rented)


/* Question 4 */

search = {}
for (i = 0; i < books.length; i++) {
    if (books[i].id == 873495) {
        search = books[i]
    }
}

console.log(search)



/* Question 5 */

for (i = 0; i < books.length; i++) {
    if (books[i].id == 133712) {
        books.splice(i, 1); 
    }
}

console.log(books)


/* Question 6 */

books_array = []
for (i = 0; i < books.length; i++) {
    books_array.push(books[i].title)
}

console.log(books_array.sort())
