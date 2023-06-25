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
      <h3>Privalages</h3>
      <div><input type="radio" name="role" value="Spectator" id="spec"/> <label for="spec">Spectator</label> </div> 
      <div><input type="radio" name="role" value="Driver" id="driv"/>  <label for="driv">Driver</label></div> 
      <div><input type="radio" name="role" value="Admin" id="admin"/>  <label for="admin">Admin</label> </div> 

      <h3>Team</h3>
      <div><input type="radio" name="team" value="Mercedes AMG Motorsport" id="AMG"/> <label for="AMG">Mercedes AMG Motorsport</label> </div> 
      <div><input type="radio" name="team" value="Red Bull Racing" id="Red"/>  <label for="drRediv">Red Bull Racing</label></div> 
      <div><input type="radio" name="team" value="Aston Martin F1 Team" id="Aston"/>  <label for="Aston">Aston Martin F1 Team</label> </div> 
      <div><input type="radio" name="team" value="McLaren" id="McLaren"/>  <label for="McLaren">McLaren</label> </div> 
      <div><input type="radio" name="team" value="Ferrari" id="Ferrari"/>  <label for="Ferrari">Ferrari</label> </div> 
      <div><input type="radio" name="team" value="Alpine F1 Team" id="Alpine"/>  <label for="Alpine">Alpine F1 Team</label> </div> 
      <div><input type="radio" name="team" value="AlphaTauri" id="AlphaTauri"/>  <label for="AlphaTauri">AlphaTauri</label> </div> 
      <div><input type="radio" name="team" value="Alfa Romeo Racing" id="Alfa"/>  <label for="Alfa">Alfa Romeo Racing</label> </div> 
      <div><input type="radio" name="team" value="Williams" id="Williams"/>  <label for="Williams">Williams</label> </div> 
      <div><input type="radio" name="team" value="Haas F1 Team" id="Haas"/>  <label for="Haas">Haas F1 Team</label> </div> 



      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
    </div>
  );
};
export default Register;
export const qwe = 123;
export const asd = 456;
