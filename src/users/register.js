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

      const AMG = document.getElementById('AMG');
      const Red = document.getElementById('Red');
      const Aston = document.getElementById('Aston');
      const McLaren = document.getElementById('McLaren');
      const Ferrari = document.getElementById('Ferrari');
      const Alpine = document.getElementById('Alpine');
      const AlphaTauri = document.getElementById('AlphaTauri');
      const Alfa = document.getElementById('Alfa');
      const Williams = document.getElementById('Williams');
      const Haas = document.getElementById('Haas');

      if (AMG.checked) {
        user.team = "Mercedes AMG Motorsport"
      } else if (Red.checked) {
        user.team = "Red Bull Racing" 
      } else if (Aston.checked) {
        user.team = "Aston Martin F1 Team" 
      } else if (McLaren.checked) {
        user.team = "McLaren" 
      } else if (Ferrari.checked) {
        user.team = "Ferrari" 
      } else if (Alpine.checked) {
        user.team = "Alpine F1 Team" 
      } else if (AlphaTauri.checked) {
        user.team = "AlphaTauri" 
      } else if (Alfa.checked) {
        user.team = "Alfa Romeo Racing" 
      } else if (Williams.checked) {
        user.team = "Williams" 
      } else if (Haas.checked) {
        user.team = "Haas F1 Team" 
      }

      await dispatch(registerThunk(user));
      navigate("/driver/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4" style={{ fontFamily: "Helvetica" }}>Register</h1>
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
      <h3 className="text-danger mt-4" style={{ fontFamily: "Helvetica" }}>Privileges</h3>
      <div class="list-group list-group-horizontal">
        <div class="list-group-item">
          <input className="visually-hidden" type="radio" name="role" value="Spectator" id="spec"/>
          <label for="spec">Spectator</label>
        </div>
        <div class="list-group-item">
          <input className="visually-hidden" type="radio" name="role" value="Driver" id="driv"/>
          <label for="driv">Driver</label>
        </div>
        <div class="list-group-item">
          <input className="visually-hidden" type="radio" name="role" value="Admin" id="admin"/>
          <label for="admin">Admin</label>
        </div>
      </div>

      <h3 className="text-danger mt-4" style={{ fontFamily: "Helvetica" }}>Selected A Team</h3>
      <div class="list-group col-4 text-center mb-4">
        <a href="#" class="list-group-item list-group-item-action border-danger" aria-current="true">
          Mercedes AMG Motorsport
        </a>
        <a href="#" class="list-group-item list-group-item-action active border-danger bg-danger fw-bold">Red Bull Racing</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Aston Martin F1 Team</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">McLaren</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Ferrari</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Alpine F1 Team</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">AlphaTauri</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Alfa Romeo Racing</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Williams</a>
        <a href="#" class="list-group-item list-group-item-action border-danger">Haas F1 Team</a>
      </div>



      <button onClick={handleRegister} className="btn btn-primary d-block mb-4">
        Register
      </button>
    </div>
  );
};
export default Register;
export const qwe = 123;
export const asd = 456;
