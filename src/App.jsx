import React from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { loading, error, isOffline } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const colors = [
    "red",
    "pink",
    "yellow",
    "green",
    "lime",
    "gray",
    "skyblue",
    "lightgray",
    "hotpink",
    "blue",
    "khaki",
    "salmon",
    "purple",
    "orange",
    "teal",
    "brown"
  ];

  if (isOffline) {
    return (
      <div className="offlineScreen">
        <h2>Check your internet connection</h2>
        <div className="offlineToast">
          <p>No internet — please reconnect.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loadingScreen">
        <h2>Loading, please wait...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="errorScreen">
        <h2 style={{ color: "red" }}>{error}</h2>
      </div>
    );
  }

  return (
    <div className="mainBox">
      {colors.map((color, index) => (
        <div
          key={index}
          className="colorBox"
          style={{ backgroundColor: color }}
        >
          <h3>Box {index + 1}</h3>
          <p>Lorem ipsum dolor sit amet elit.</p>
        </div>
      ))}
    </div>
  );
}

export default App;
