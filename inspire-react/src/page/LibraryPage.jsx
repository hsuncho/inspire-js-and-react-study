import Book from "../component/BookComponent"

const books = [
    { name : "A", price : "10,000" },
    { name : "B", price : "20,000" },
    { name : "C", price : "30,000" },
    { name : "D", price : "40,000" },
    { name : "E", price : "50,000" },
]

function LibraryPage(props) {
    return (
        <div className="container">
            <div align="center">
                즐거운 SPA(React)
                <button type="button" className="btn btn-primary">Check</button>
            </div>
            <hr />
            {
                books.map(book => {
                    return (
                        // <Book name={book.name} price={book.price} />
                        <Book data={book} />
                    )
                })
            }
        </div>
    );
}

export default LibraryPage;