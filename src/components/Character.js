import React from "react";
import { Card, CardTitle, CardText, CardDeck, CardBody } from "reactstrap";

// Write your Character component here

const Character = ({ individual }) => {
  return (
    <CardDeck>
      <Card key={individual.id}>
        <CardBody>
          <CardTitle tag="h2">{individual.name}</CardTitle>
          <CardText>{individual.gender}</CardText>
          <CardText>Birth Year: {individual.birth_year}</CardText>
          <CardText>Skin Color: {individual.skin_color}</CardText>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Character;
