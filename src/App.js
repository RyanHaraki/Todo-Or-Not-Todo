import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { auth } from "./firebase";
import Todos from "./components/Todos";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));



  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <SideBar />
              <Switch>
                <Route path="/">
                  <Todos />
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 65px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;
