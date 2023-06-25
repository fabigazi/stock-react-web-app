import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./users-thunks";
import { useNavigate } from "react-router";
const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      const driv = document.getElementById('driv');
      const admin = document.getElementById('admin');


      if (driv.checked) {
        user.role = "driver"
      } else if (admin.checked) {
        user.role = "admin" 
      }

      await dispatch(registerThunk(user));
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="Username"
        className="form-control"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        className="form-control"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div><input type="radio" name="role" value="Spectator" id="spec"/> <label for="spec">Spectator</label> </div> 
      <div><input type="radio" name="role" value="Driver" id="driv"/>  <label for="driv">Driver</label></div> 
      <div><input type="radio" name="role" value="Admin" id="admin"/>  <label for="admin">Admin</label> </div> 


      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
    </div>
  );
};
export default Register;
export const qwe = 123;
export const asd = 456;
