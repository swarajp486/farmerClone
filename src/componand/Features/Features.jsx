import React from "react";
import "./features.css";
import state from "../../assets/state.png";
import time from "../../assets/time.png";
import chat from "../../assets/chat.png";
import analysis from "../../assets/analysis.png";

function Features() {
  return (
    <div id="Features">
      <div className="feat-con" data-aos="zoom-out-up">
        <div className="feat-text">
          <div className="feat-t-text features">
            <p>🔥 PREMIER FEATURES</p>
          </div>
        </div>
        <h1>
          Discover our product's <span>Capabilities</span>
        </h1>
        <h2>
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </h2>
      </div>

      <div className="feature-main">
        <div className="featur-f">
          <div>⭐️</div>
          <h2>
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </h2>
        </div>
        <div className="featur-s">
          <img src={state} alt="alterneter" />
          <h2>Smart Task Management</h2>
          <h3>Say goodbye to chaos with our smart task management system</h3>
        </div>
      </div>

      <div className="f-card">
        <div className="f-card-con">
          <img src={time} alt="card1" />
          <h2>Flexible Scheduling</h2>
          <h3>Stay productive with our flexible scheduling system</h3>
        </div>
        <div className="f-card-con">
          <img src={chat} alt="card2" />
          <h2>Easy Communication</h2>
          <h3>Collaborate seamlessly with your team in real-time</h3>
        </div>
        <div className="f-card-con">
          <img src={analysis} alt="card3" />
          <h2>Analytics</h2>
          <h3>Gain valuable insights with our advanced analytics feature</h3>
        </div>
      </div>
    </div>
  );
}

export default Features;
