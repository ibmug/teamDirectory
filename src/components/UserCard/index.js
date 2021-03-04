import React from "react";
import "./style.css";

function UserCard(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.login.uuid} className="list-group-item">
          <img alt="User" src={result.picture.large} className="img-fluid" />
          <p>{result.login.username}</p>
          <p>{result.name.first +" "+ result.name.last}</p>
          <p>{result.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserCard;
