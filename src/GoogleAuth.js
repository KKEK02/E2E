import { useEffect } from "react";
import { gapi } from "gapi-script";
import { storeRefreshToken,removeRefreshToken,getRefreshToken } from "./Firebase";
const CLIENT_ID = "194029548775-m5tr81d6e0fnog8uktm8bf9j6tonmcvm.apps.googleusercontent.com"; // Replace with your Client ID
const API_KEY = "AIzaSyBYjTLshY65bKn8gqAixsp51YMbIYCJGPY"; // Replace with your API Key
const SCOPES = "https://www.googleapis.com/auth/drive"; // full read/write access



const GoogleAuth = ({ onLogin }) => {
  useEffect(() => {
    function initGapi() {
      gapi.load("client:auth2", () => {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        }).then(()=>{
            checkSignInStatus();
        });
      });
    }
    initGapi();
  }, []);

  const checkSignInStatus = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance.isSignedIn.get()) {
      const user = authInstance.currentUser.get();
    //   gapi.auth2.getAuthInstance().disconnect();
      onLogin(user);
    }

    const accessToken = await getRefreshToken();
    console.log(accessToken);
    if (accessToken != null) {

    gapi.client.setToken({ access_token: accessToken });
    onLogin(gapi.auth2.getAuthInstance().currentUser.get());
    }
  };

  const handleLogin = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    const user = await authInstance.signIn({
        scope: "https://www.googleapis.com/auth/drive",
        prompt: "consent",
        access_type: "offline", // for getting a refresh token
      });
    
    const refreshToken = authInstance.currentUser.get().getAuthResponse(true).refreshToken;
    const accessToken = authInstance.currentUser.get().getAuthResponse(true).access_token;
    console.log(refreshToken);
    await storeRefreshToken(refreshToken,accessToken);
    onLogin(user);
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};



export const logoutDrive = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    removeRefreshToken();
    authInstance.signOut().then(() => {
      console.log("User signed out.");
    });
}

export default GoogleAuth;
