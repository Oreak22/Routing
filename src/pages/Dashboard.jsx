import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <div>
        this is the Dashboard page for a logged in user, logged out users wii be
        ejected
      </div>
    );
  } else {
    return <Navigate to={"/signin"} />;
  }

//   return loggedIn ? (
//     <>
//       <div>loggedIn</div>
//     </>
//   ) : (
//     <Navigate to={"/signin"} />
//   );
};

export default Dashboard;
