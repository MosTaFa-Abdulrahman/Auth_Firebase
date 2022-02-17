import React, { useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h2 style={{ color: "green" }}>Register User</h2>
        <input
          type="text"
          placeholder="Enter Email..."
          style={{ marginRight: "5px" }}
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          style={{ marginRight: "5px" }}
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
      <br />
      <br />
      <div>
        <h2 style={{ color: "green" }}>Login User</h2>
        <input
          type="text"
          placeholder="Enter Email..."
          style={{ marginRight: "5px" }}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          style={{ marginRight: "5px" }}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
      <br />
      <br />
      <h2>User LoggedIn: </h2> <br />
      {user?.email}
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;

/*
 const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

******************************************************************************************
  <div>
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Enter Email.."
          style={{ marginRight: "5px" }}
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password.."
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Signup</button>
      </div>
      <br />
      <br />
      <div>
        <h2>Login User</h2>
        <input
          type="text"
          placeholder="Enter Email.."
          style={{ marginRight: "5px" }}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password.."
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
      <br />
      <br />
      <h3>User LoggedIn: </h3> <br />
      {user?.email}
      <button onClick={logout}>Sign Out </button>
*/
