import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "./users-thunks";
import { useNavigate } from "react-router";
import * as tuitsService from "../driver/speeds-service";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState(currentUser);
  const [mySpeeds, setMySpeeds] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };
    const fetchMySpeeds = async () => {
      try {
        const tuits = await tuitsService.findMySpeeds();
        setMySpeeds(tuits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
    fetchMySpeeds();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-danger fw-bold" style={{fontFamily: "Helvetica"}}>Profile</h1>
      {profile && (
        <>
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Username</label>
          <input className="form-control mb-3 border-danger" value={profile.username} readOnly />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Password</label>
          <input
            className="form-control mb-3 border-danger"
            value={profile.password}
            type="password"
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>First Name</label>
          <input
            className="form-control mb-3 border-danger"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Last Name</label>
          <input
            className="form-control mb-3 border-danger"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <button onClick={handleUpdate} className="btn btn-primary mb-3 me-3 bg-success border-success fw-bold" style={{fontFamily: "Helvetica"}}>
            Update
          </button>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-danger fw-bold mb-3" style={{fontFamily: "Helvetica"}}>
        Logout
      </button>
      <pre>{JSON.stringify(mySpeeds, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
