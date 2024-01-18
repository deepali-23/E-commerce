import React from "react";
import styled from "styled-components";
export default function Table() {
  return (
    <Div>
      <Row>ColumnOne</Row>
      <Row>ColumnTwo</Row>
      <Row>ColumnThree</Row>
      <Row>ColumnThree</Row>
      <Row>ColumnThree</Row>
      <Row>ColumnThree</Row>
      <Row>ColumnThree</Row>
      <Row>ColumnThree</Row>

    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15%;
  color: #ffffff;
  border: 0.5px solid #ffffff;
`;
const Row = styled.div`
  background: #1c3c93 0% 0% no-repeat padding-box;
  width: 15%;
  height: 150px;
  border: 0.5px solid #ffffff;
  color: #ffffff;
  display:flex;
  
`;

