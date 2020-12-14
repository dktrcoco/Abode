import React from "react";
import "../styles/LogoutStyle.css";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com";

function Logout() {
  // isLoggedIn();

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");

    // this line is critical, it will remove the cookie used for identification
    // after a user logs out
    document.cookie = "googleId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    if (window.location.pathname === "/home") {
    } else {
      window.location.replace("/home");
    }
    // alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  // function isLoggedOut() {
  //   console.log("testing logged out function");
  // }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  const style = {
    display: "none",
  };

  return (
    <button
      onClick={signOut}
      id="logoutButton"
      style={style}
      className="button"
    >
      <img
        src="./assets/img/google.svg"
        className="icon"
        width="18px"
        height="18px"
      ></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

// function hideLogoutBtn() {
//   // alert("Test");
//   // var loginBtn = document.getElementById("login");
//   var logoutBtn = document.getElementById("logout");
//   if (logoutBtn.style.display === "block") {
//     // loginBtn.style.display = "block";
//     logoutBtn.style.display = "none";
//   } else {
//     logoutBtn.style.display = "block";
//     // logoutBtn.style.display = "block";
//   }
// }

export default Logout;
