/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { BrowserRouter } from "react-router-dom";
import App from "App";

firebase.initializeApp({
  apiKey: "AIzaSyB2H6F4PPZuN5Qe_Ou3kHXF2qlanjc-8OM",
  authDomain: "precious-gem.firebaseapp.com",
  databaseURL: "https://precious-gem-default-rtdb.firebaseio.com",
  projectId: "precious-gem",
  storageBucket: "precious-gem.appspot.com",
  messagingSenderId: "66676254186",
  appId: "1:66676254186:web:311222a399de0784813e93",
  measurementId: "G-VB2GSR6L61",
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
