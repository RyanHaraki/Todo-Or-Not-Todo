import React from "react";
import styled from "styled-components";

const Header = ({ user, signOut }) => {
  return (
    <Container>
      <Logo>
        <h1>Todo or Not Todo</h1>
      </Logo>
      <Main>
        <p onClick={signOut}>Log Out</p>
        <ProfilePicture onClick={signOut}>
          <img src={user.profileImage}></img>
        </ProfilePicture>
      </Main>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #242582;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const Logo = styled.div`
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  
  p {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ProfilePicture = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
