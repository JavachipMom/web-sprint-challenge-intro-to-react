import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import { Container, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log("This is the response ", response);
        const characterArray = response.data.results;
        console.log("These are the results ", characterArray);
        const characterKeys = Object.values(characterArray);
        console.log(Object.values(characterKeys));
        setCharacters(characterKeys);
      })
      .catch((error) => {
        console.log("This is the error ", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((individual) => {
          return <Character individual={individual} key={individual.id} />;
        })}
      </Row>
    </Container>
  );
}
