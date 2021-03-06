import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import db from '../firebase'

const Login = (props) => {
  //Login with Google function
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          profileImage: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
        addUser(newUser.name, newUser.email, newUser.profileImage)
      })
      .catch((err) => alert(err.message));
  };

  //Add user to firebase
  const addUser = (name, email, photoURL) => {
  
    var docRef = db.collection("users").doc();

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


      db.collection("users").add({
        name: name,
        email: email,
        photoUrl: photoURL,
      })
      .then(() => {
        console.log("User logged to DB!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <Container>
      <LoginPrompt>
        <h1>Todo or Not Todo</h1>
        <p>The easiest way to organize your life.</p>

        <LoginButton onClick={signIn}>Login with Google</LoginButton>
        <a href="https://www.apple.com/ca/app-store/" class="app-prompt">
          Download the app
        </a>
      </LoginPrompt>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background: #daf6f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginPrompt = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 3px 7px 2px rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 15px 0;
  }

  button {
    margin-bottom: 8px;
  }

  .app-prompt {
    font-size: 0.8rem;
    color: grey;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
const LoginButton = styled.button`
  padding: 13px 12px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  background: #f64c72;
  color: white;
  font-size: 1.1rem;

  :hover {
    background: #d12a4f;
  }
`;
