import React,{Component} from "react";
import {Card,Form,Button,Col} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave,faPlusSquare,faUndo,faList,faEdit} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import MyToast from "./MyToast"

export default class Book extends Component {



constructor(props){
	super(props);
	this.state = this.initialState;
	this.state.show=false
	this.bookChange=this.bookChange.bind(this);
	this.submitBook=this.submitBook.bind(this);

}

initialState = {
id:"",title:"",author:"",coverphotoURL:"",isbnNumber:"",price:"",language:""
}

componentDidMount(){
const bookId=+this.props.match.params.id;
if(bookId){
this.findBookById(bookId);
}
}

findBookById=(bookId)=>{
fetch("http://localhost:8080/rest/books/"+bookId)
.then(response => response.json())
.then((book)=>{
if(book){
this.setState({
id: book.id,
title:book.title,
author:book.author,
coverphotoURL:book.coverphotoURL,
isbnNumber:book.isbnNumber,
price:book.price,
language:book.language
});
}
}).catch((error)=>{
console.error("Error - "+error);
});
}



/*findBookById=(bookId)=>{
axios.get("http://localhost:8080/rest/books/"+bookId)
.then(response=>{
if(response.data!=null){
this.setState({
id: response.data.id,
title:response.data.title,
author:response.data.author,
coverphotoURL:response.data.coverphotoURL,
isbnNumber:response.data.isbnNumber,
price:response.data.price,
language:response.data.language
});
}
}).catch((error)=>{
console.error("Error - "+error);
});
}*/




resetBook=() => {
this.setState(() => this.initialState)
}

/*submitBook= event =>{
event.preventDefault();

	const book = {

	         title:  this.state.title,
    		 author: this.state.author,
    		 coverphotoURL: this.state.coverphotoURL,
    		 isbnNumber: this.state.isbnNumber,
    		 price: this.state.price,
    		 language: this.state.language

	};

	axios.post("http://localhost:8080/rest/books",book)
	.then(response => {
	if(response.data!=null){
	this.setState({"show":true, "method":"post"});
	setTimeout(() => this.setState({"show":false}),3000);

	}
	else{
	this.setState({"show":false});

	}});
	this.setState(this.initialState);
	

};*/


submitBook= event =>{
event.preventDefault();

	const book = {

	         title:  this.state.title,
    		 author: this.state.author,
    		 coverphotoURL: this.state.coverphotoURL,
    		 isbnNumber: this.state.isbnNumber,
    		 price: this.state.price,
    		 language: this.state.language

	};

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

	fetch("http://localhost:8080/rest/books",{
	method:"POST",
	body:JSON.stringify(book),
	headers
	})
	.then(response => response.json())
	.then((book) => {
	if(book){
	this.setState({"show":true, "method":"post"});
	setTimeout(() => this.setState({"show":false}),3000);

	}
	else{
	this.setState({"show":false});

	}});
	this.setState(this.initialState);


};

/*updateBook = event =>{
event.preventDefault();

	const book = {
	         id:this.state.id,
	         title:  this.state.title,
    		 author: this.state.author,
    		 coverphotoURL: this.state.coverphotoURL,
    		 isbnNumber: this.state.isbnNumber,
    		 price: this.state.price,
    		 language: this.state.language

	};

	axios.put("http://localhost:8080/rest/books",book)
	.then(response => {
	if(response.data!=null){
	this.setState({"show":true, "method":"put"});
	setTimeout(() => this.setState({"show":false}),3000);
	setTimeout(() => this.bookList(),3000);
	}
	else{
	this.setState({"show":false});

	}});
	this.setState(this.initialState);

}*/

updateBook = event =>{
event.preventDefault();

	const book = {
	         id:this.state.id,
	         title:  this.state.title,
    		 author: this.state.author,
    		 coverphotoURL: this.state.coverphotoURL,
    		 isbnNumber: this.state.isbnNumber,
    		 price: this.state.price,
    		 language: this.state.language

	};

	const headers = new Headers();
     headers.append("Content-Type", "application/json");

	fetch("http://localhost:8080/rest/books",{
                               method:"PUT",
                               body:JSON.stringify(book),
                               headers
                               })
    .then(response => response.json())
	.then((book) => {
	if(book){
	this.setState({"show":true, "method":"put"});
	setTimeout(() => this.setState({"show":false}),3000);
	setTimeout(() => this.bookList(),3000);
	}
	else{
	this.setState({"show":false});

	}});
	this.setState(this.initialState);

}

bookChange =event =>{
	this.setState({
		[event.target.name]:event.target.value
	})
};

bookList=()=>
{
return this.props.history.push("/list");
};

render(){

const {title,author,coverphotoURL,price,language,isbnNumber}=this.state;
	return (

	<div>
	<div style={{"display":this.state.show ? "block" : "none"}}>
	 <MyToast show={this.state.show} message={this.state.method ==="put" ? "Book Updated Successfully." : "Book Saved Successfully"} type={"success"}/>
	 </div>
	 <Card className={"border border-dark bg-dark text-white"}>
     		<Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />{this.state.id ? "Update Book":"Add New Book"}</Card.Header>
     		<Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id="bookFormId">

     		<Card.Body>
     		<Form.Row>
     		<Form.Group as= {Col} controlId="formGridTitle">
     		<Form.Label>Title</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="title"
     		value={title}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book Title" />

     		</Form.Group>

     		<Form.Group as= {Col} controlId="formGridAuthor">
     		<Form.Label>Author</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="author"
     		value={author}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book Author" />

     		</Form.Group>
             </Form.Row>


     		<Form.Row>
     		<Form.Group as= {Col} controlId="formGridisbnNumber">
     		<Form.Label>ISBN Number</Form.Label>
     		<Form.Control required autoComplete="off"
     		 type="test"
     		name="isbnNumber"
     		value={isbnNumber}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book ISBN Number" />

     		</Form.Group>
     		<Form.Group as= {Col} controlId="formGridcoverphotoURL">
     		<Form.Label>Cover Photo URL</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="coverphotoURL"
     		value={coverphotoURL}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book Cover Photo URL" />

     		</Form.Group>
             </Form.Row>


     		<Form.Row>
     		<Form.Group as= {Col} controlId="formGridprice">
     		<Form.Label>Price</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="price"
     		value={price}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book Price" />

     		</Form.Group>
     		<Form.Group as= {Col} controlId="formGridlanguage">
     		<Form.Label>Language</Form.Label>
     		<Form.Control required autoComplete="off"
     		type="test"
     		name="language"
     		value={language}
     		onChange={this.bookChange}
     		className={"bg-dark text-white"}
     		placeholder="Enter Book Language" />

     		</Form.Group>
             </Form.Row>



             <Card.Footer style={{"textAlign":"right"}}>
     		<Button size="sm" variant="success" type="submit">
     		<FontAwesomeIcon icon={faSave} />{this.state.id ? "Update":"Save"}
     		</Button>{" "}
     		<Button size="sm" variant="info" type="reset">
             		<FontAwesomeIcon icon={faUndo} />Reset
             		</Button>{" "}
             <Button size="sm" variant="info" type="button" onClick={this.bookList.bind(this)}>
                          		<FontAwesomeIcon icon={faList} />Book List
                          		</Button>
     		</Card.Footer>

     		</Card.Body>
     		</Form>
     		</Card>

	</div>






		

		);
}
}

