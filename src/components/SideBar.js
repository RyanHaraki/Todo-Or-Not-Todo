import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

const SideBar = () => {
  const addList = () => {
    let newListName = prompt("Name of list");
  };

  return (
    <Container>
      <Title>
        Task Lists
        <AddIcon onClick={addList} />
      </Title>
      <TasksList>
        <Task>Shopping List</Task>
        <Task>Shopping List</Task>
      </TasksList>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background: #1b1b74;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 10px 20px;
  font-weight: bold;
  font-size: 1.2rem;

  .MuiSvgIcon-root {
    cursor: pointer;
    border-radius: 50%;

    :hover {
      background: #2f2fa2;
    }
  }
`;

const TasksList = styled.div`
  margin-top: 20px;
`;

const Task = styled.div`
  margin-bottom: 2px;
  color: white;
  padding: 3px 20px;
  cursor: pointer;
  border-radius: 12px;

  :hover {
    background: #2f2fa2;
  }
`;
