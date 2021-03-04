import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import NewSearchForm from "../components/NewSearchForm";
import Alert from "../components/Alert";
import UserCard from "../components/UserCard";

class NewAbout extends Component {
  state = {
    search: "",
    users: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base users and update this.state.users
  componentDidMount() {
let userArray = [];

     
    API.getRandomUser()
        .then(res => {
            
         userArray = [...res.data.results];
         if(userArray){
          
          this.setState({users:userArray})
          console.log(userArray);
      }
        })
        .catch(err => console.log(err));
 
    }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //Do something here.
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          /> */}
          <NewSearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </Container>
      <Container>
      <UserCard results={this.state.users} />
      </Container>
      </div>

    );
  }
}

export default NewAbout;
