//Buscando e encontrando dados em Array
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechler',
            },

        ],
    },
    {
        category: 'Inteligência emocional',
        books: [
            {
                title: 'Você é Insubstituivel',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Ccovey',
            },
        ],
    },
];

//Essa variável irá contar a quantidade de categorias
const totalCategories = booksByCategory.length

console.log(totalCategories)
//estrutura de repetição
for (let category of booksByCategory) {
    console.log('Total de livros da categoria ', category.category)
    console.log(category.books.length)
}

//Função para contar a quantidade de autores
function countAuthors () {
    let authors = [];
    //Dois loops, um irá pegar a categoria e o outro os autores.
    for(let category of booksByCategory) {
        for(book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores ", authors.length)
}

countAuthors();

function booksOfAuthor (author) {
    let books = [];
    //Dois loops, um irá pegar a categoria e outro o nome do autor
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('George S. Clason')