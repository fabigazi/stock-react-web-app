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

  const dob = new Date();//new Date(profile.dob).toISOString().split('T')[0]; 

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
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Speed ID</label>
          <input className="form-control mb-3 border-danger opacity-50 bg-danger text-white" value={profile._id} readOnly />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Role</label>
          <input
            className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
            value={profile.role}
            readOnly
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Speed Username</label>
          <input className="form-control mb-3 border-danger opacity-50 bg-danger text-white" value={profile.username} readOnly />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Password</label>
          <i class="bi bi-pencil text-danger ms-2"></i>
          <input
            className="form-control mb-3 border-danger"
            value={profile.password}
            type="password"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>First Name</label>
          <i class="bi bi-pencil text-danger ms-2"></i>
          <input
            className="form-control mb-3 border-danger"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Last Name</label>
          <i class="bi bi-pencil text-danger ms-2"></i>
          <input
            className="form-control mb-3 border-danger"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Email</label>
          <i class="bi bi-pencil text-danger ms-2"></i>
          <input
            className="form-control mb-3 border-danger"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Date of Birth</label>
          <i class="bi bi-pencil text-danger ms-2"></i>
          <input
            type="date"
            className="form-control mb-3 border-danger"
            value={dob}
            onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })
            }
          />
          <label className="text-danger" style={{fontFamily: "Helvetica"}}>Marrital Status</label>
          <input
            className="form-control mb-3 border-danger opacity-50 bg-danger text-white"
            value={`${profile.married ? "Married" : "Not Married"}`}
            readOnly
          />
          <button onClick={handleUpdate} className="btn btn-primary mb-3 mt-5 me-3 bg-success border-success fw-bold" style={{fontFamily: "Helvetica"}}>
            Update
          </button>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-danger fw-bold mt-5 mb-3" style={{fontFamily: "Helvetica"}}>
        Logout
      </button>
      <pre>{JSON.stringify(mySpeeds, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
