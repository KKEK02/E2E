import { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import DriveFiles from "./DriveFiles";
import { logoutDrive } from "./GoogleAuth";

function Resource() {
  const [user, setUser] = useState(null);
  const handleLogoutDrive = () => {
    logoutDrive();
    setUser(null);
  }

  return (
    <div>
      {!user ? <GoogleAuth onLogin={setUser} /> : <DriveFiles logout={handleLogoutDrive}/>}
    </div>
  );
}

export default Resource;
