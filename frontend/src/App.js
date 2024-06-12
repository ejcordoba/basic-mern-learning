import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import ManageUsers from "./components/ManageUsers";
import UsersList from "./components/UsersList";

import { Container } from "@mui/material";

function App() {
  return (
    <div className="">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<UsersList />}></Route>
          <Route path="/CreateUser" element={<ManageUsers />}></Route>
          <Route path="/EditUser/:id" element={<ManageUsers />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
