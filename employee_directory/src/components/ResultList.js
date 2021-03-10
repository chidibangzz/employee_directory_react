import React from "react";

function ResultList(props) {
  return (
    <>
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.email}>
        <h3>{result.name.first} {result.name.last}</h3>
        <h3>{result.email}</h3>

          <img alt={result.title} className="img-fluid" src={result.picture.large} />
        </li>
      ))}
    </ul>
    </>
  );
}

export default ResultList;
