import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import styled from "styled-components";

const Table = () => {
  return (
    <Container>
      <table>
        <tr>
          <td>Name</td>
          <td>Date Created</td>
          <td>Urgency</td>
        </tr>
        <tr>
          <td
            className="task-name"
            style={{
              width: "60%",
            }}
          >
            <CheckBoxOutlineBlankIcon />
            Eggs
          </td>
          <td
            style={{
              width: "20%",
            }}
          >
            02/15/2020
          </td>
          <td
            class="task-urgency"
            style={{
              width: "20%",
            }}
          >
            important
          </td>
        </tr>
        <tr>
          <td className="task-name">
            <CheckBoxOutlineBlankIcon />
            Eggs
          </td>
          <td>02/15/2020</td>
          <td class="task-urgency">important</td>
        </tr>
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  .task-name {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      cursor: pointer;
    }
  }

  th,
  td {
    text-align: left;
    padding: 10px 8px;
  }

  .task-urgency {
    color: #00bf36;
  }

  tr:nth-child(even) {
    background-color: #efefef;
    border: 1px solid #efefef;
  }
`;
