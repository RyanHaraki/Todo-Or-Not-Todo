import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table";

const Todos = () => {
  return (
    <Container>
      <ListName>
        Shopping List
        <AddIcon />
      </ListName>

      <InComplete>
      <h2>In Progress</h2>

        <Table />
      </InComplete>
      <Complete>
        <h2>Completed</h2>

        <Table />
      </Complete>
    </Container>
  );
};

export default Todos;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  font-weight: bold;
  font-size: 2.3rem;
  margin-bottom: 10%;

  .MuiSvgIcon-root {
    color: #bdbdbd;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    
    :hover {
      background: #e6e6e6;
    }
  }
`;

const InComplete = styled.div`
  width: 80%;
  margin-bottom: 5%;
`;

const Complete = styled.div`
  width: 80%;
`;
