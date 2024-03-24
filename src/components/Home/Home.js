import React from "react";
import videoBackground from "../Videos/ZooVid2.mp4"; // Import your video file
import "./Home.css"
const Home = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className="content">
        {/* Your other content here */}
      </div>
    </div>
  );
};

export default Home;
