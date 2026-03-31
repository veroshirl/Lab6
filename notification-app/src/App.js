import React from "react";

function App() {

  // Request permission
  const requestPermission = () => {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        alert("Notification permission granted!");
      }
    });
  };

  // Show notification
  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Hello Veronica 👋", {
        body: "This is your first notification!",
        icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
      });
    } else {
      alert("Please allow notifications first!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🔔 React Notifications</h1>

      <button onClick={requestPermission}>
        Allow Notifications
      </button>

      <br /><br />

      <button onClick={showNotification}>
        Show Notification
      </button>
    </div>
  );
}

export default App;