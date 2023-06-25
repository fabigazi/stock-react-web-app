import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "./users-thunks";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk(user));
      navigate("/driver/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4" style={{fontFamily: "Helvetica"}}>Login</h1>
      <input
        placeholder="Username"
        className="form-control mb-3 border-danger"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="form-control mb-3 border-danger"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleLogin} className="btn btn-success">
        Login
      </button>
    </div>
  );
};

export default Login;
export const qwe = 123;
export const asd = 456;
