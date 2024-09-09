import React from "react";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const [fromData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header>
        <p className="pageHeader">{auth.currentUser.displayName}</p>
        <button className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default Profile;
