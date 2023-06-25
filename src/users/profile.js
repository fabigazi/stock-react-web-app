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
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <>
          <label>Username</label>
          <input className="form-control" value={profile.username} readOnly />
          <label>Password</label>
          <input
            className="form-control"
            value={profile.password}
            type="password"
          />
          <label>First Name</label>
          <input
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label>Last Name</label>
          <input
            className="form-control"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <button onClick={handleUpdate} className="btn btn-primary">
            Update
          </button>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <pre>{JSON.stringify(mySpeeds, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
