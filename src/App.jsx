import React from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { loading, error, isOffline } = useFetch();

  if (isOffline) {
    return (
      <div className="offlineScreen">
        <h2>Internet connection lost </h2>
        <div className="offlineToast">
          <p>Please reconnect to continue.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loadingScreen">
        <h2>Loading... please wait a moment</h2>
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
      <div className="colorBox box1"><h3>Box 1</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box2"><h3>Box 2</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box3"><h3>Box 3</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box4"><h3>Box 4</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box5"><h3>Box 5</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box6"><h3>Box 6</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box7"><h3>Box 7</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box8"><h3>Box 8</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box9"><h3>Box 9</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box10"><h3>Box 10</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box11"><h3>Box 11</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box12"><h3>Box 12</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box13"><h3>Box 13</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box14"><h3>Box 14</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box15"><h3>Box 15</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
      <div className="colorBox box16"><h3>Box 16</h3><p>Lorem ipsum dolor sit amet elit.</p></div>
    </div>
  );
}

export default App;
