// Write your Character component here
import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

const Character = ({ individual }) => {
  const CardDeck = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: auto;
    justify-content: space-between;
    width: 500px;
    margin: auto;
    border-style: dashed;
  `;

  const style = {
    color: individual.gender === "male" ? "royalblue" : "pink",
  };

  return (
    <div key={individual.id}>
      <CardDeck>
        <Card>
          <CardBody>
            <CardTitle tag="h2">{individual.name}</CardTitle>
            <CardText style={style}>{individual.gender}</CardText>
            <CardText>Birth Year: {individual.birth_year}</CardText>
            <CardText>Skin Color: {individual.skin_color}</CardText>
            <CardText></CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Character;
