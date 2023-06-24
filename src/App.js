import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Driver from "./driver";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navigation from "./nav";
import Users from "./users";
// import "./App.css";
import { Provider } from "react-redux";
import { store } from "./driver/store";
import LoginScreen, { qwe, asd } from "./users/login";
import RegisterScreen from "./users/register";
import ProfileScreen from "./users/profile";
import UsersContextLoader from "./users/users-context-loader";
import ProtectedRoute from "./users/protected-route";

function App({ wer, ert, rt }) {
  return (
    <Provider store={store}>
      <UsersContextLoader>
        <BrowserRouter>
          <div className="container">
            <Navigation />
            <Routes>
              <Route
                path="/users/*"
                element={
                  <div className="row">
                    <div className="col-12">
                      <Users />
                    </div>
                    <div className="col-6">{/* <UserListRedux /> */}</div>
                  </div>
                }
              />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/todos-redux/*" element={<TodosRedux />} />
              <Route path="/todos/*" element={<Todos />} />
              <Route path="/" element={<Navigate to="/labs/a3" />} /> */}
              <Route
                path="/driver/*"
                element={
                  <ProtectedRoute>
                    <Driver />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </UsersContextLoader>
    </Provider>
  );
}

export default App;
