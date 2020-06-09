import React from "react";
import {Card,Table,Image,ButtonGroup,Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList,faEdit,faTrash} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";


class BookList extends React.Component {
	constructor(props){
		super(props);
		this.state={
			books: []
		}
	}

	componentDidMount(){
this.findAllBooks();
	}

findAllBooks(){
	axios.get("http://localhost:8080/rest/books")
    		.then(response => response.data)
    		.then((data) => {
    			this.setState({books:data});
    		})};

deleteBook=(bookId) =>{
axios.delete("http://localhost:8080/rest/books/"+bookId)
.then(response => {
if(response.data != null){
alert("Book deleted successfully");
this.setState({
books:this.state.books.filter(book => book.id !==bookId)
});

}});
};


	render(){
		return (
			<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header><FontAwesomeIcon icon={faList} />Book List</Card.Header>
			<Card.Body>
			<Table bordered hover striped variant="dark">
			<thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>ISBN Number</th>
      <th>Price</th>
      <th>Language</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {
  this.state.books.length === 0  ?
    <tr align="center">
      <td colSpan="6">Books Available.</td>

    </tr> :
    this.state.books.map((book) => (
    <tr key={book.id}>
    <td>
    <Image src={book.coverphotoURL} roundedCircle width="25" height="25"/>
    {book.title}
    </td>
    <td>{book.author}</td>
    <td>{book.isbnNumber}</td>
    <td>{book.price}</td>
    <td>{book.language}</td>
    <td>


    <ButtonGroup>
    <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>{" "}
    <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this,book.id)}><FontAwesomeIcon icon={faTrash} /></Button>
    </ButtonGroup>
</td>
    </tr>
)   )
}
  </tbody>
			</Table>
			</Card.Body>
			</Card>


			)
	}
}

export default BookList;