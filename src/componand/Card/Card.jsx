import React from "react";
import logoface from "../../assets/logoface.png";
import "./card.css";
function Card() {
  return (
    <div className="card">
      <div className="card-con">
        <div className="card-l">
          <span>👋 DON'T MISS OUT</span>
          <h1>
            Unleash your <span>Potential</span> with us
          </h1>
          <p>
            Join our community of ambitious individuals and organizations eager
            to make a difference.
          </p>
          <button>Try out Now</button>
        </div>
        <div className="card-r">
          <h3>
            <span> 200+</span> Happy Users
          </h3>
          <img src={logoface} alt="imageof avatars" />
        </div>
      </div>
    </div>
  );
}

export default Card;
