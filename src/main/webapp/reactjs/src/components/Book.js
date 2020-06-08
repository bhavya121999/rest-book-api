import React,{Component} from "react";
import {Card,Form,Button,Col} from "react-bootstrap"

export default class Book extends Component {

constructor(props){
	super(props);
	this.state = {title:"",author:"",coverphotoURL:"",isbnNumber:"",price:"",language:""};
	this.bookChange=this.bookChange.bind(this);
	this.submitBook=this.submitBook.bind(this);

}

submitBook(event){
	// alert(Title: "+this.state.title+", 
	// 	Author: "+this.state.author+", 
	// 	Cover Photo URL: "+this.state.coverphotoURL+", 
	// 	ISBN Number: "this.state.isbnNumber+", 
	// 	Price: "+this.state.price+", 
	// 	Language: "+this.state.language+");
	event.preventDefault();
}

bookChange(event){
	this.setState({
		[event.target.name]:event.target.name
	})
}

render(){
	return (
		<Card className={"border border-dark bg-dark text-white"}>
		<Card.Header>Add New Book</Card.Header>
		<Form onSubmit={this.submitBook} id="bookFormId">
		
		<Card.Body>
		<Form.Row>
		<Form.Group as= {Col} controlId="formGridTitle">
		<Form.Label>Title</Form.Label>
		<Form.Control required 
		type="test" 
		name="title" 
		value={this.state.title} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book Title" />

		</Form.Group>
		
		<Form.Group as= {Col} controlId="formGridAuthor">
		<Form.Label>Author</Form.Label>
		<Form.Control type="test" 
		name="author" 
		value={this.state.author} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book Author" />

		</Form.Group>
        </Form.Row>
		

		<Form.Row>
		<Form.Group as= {Col} controlId="formGridisbnNumber">
		<Form.Label>ISBN Number</Form.Label>
		<Form.Control type="test" 
		name="isbnNumber" 
		value={this.state.isbnNumber} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book ISBN Number" />

		</Form.Group>
		<Form.Group as= {Col} controlId="formGridcoverphotoURL">
		<Form.Label>Cover Photo URL</Form.Label>
		<Form.Control 
		type="test" 
		name="coverphotoURL" 
		value={this.state.coverphotoURL} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book Cover Photo URL" />

		</Form.Group>
        </Form.Row>
		
		
		<Form.Row>
		<Form.Group as= {Col} controlId="formGridprice">
		<Form.Label>Price</Form.Label>
		<Form.Control 
		type="test" 
		name="price" 
		value={this.state.price} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book Price" />

		</Form.Group>
		<Form.Group as= {Col} controlId="formGridlanguage">
		<Form.Label>Language</Form.Label>
		<Form.Control 
		type="test" 
		name="language" 
		value={this.state.language} 
		onChange={this.bookChange} 
		className={"bg-dark text-white"} 
		placeholder="Enter Book Language" />

		</Form.Group>
        </Form.Row>


        
        <Card.Footer style={{"textAlign":"right"}}>
		<Button size="sm" variant="primary" type="submit">
		Submit
		</Button>
		</Card.Footer>

		</Card.Body>
		</Form>
		</Card>
		

		);
}
}

