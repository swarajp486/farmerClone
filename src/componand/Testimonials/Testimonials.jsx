import React, { useEffect } from "react";
import alex from "../../assets/alex.jpg";
import martin from "../../assets/martin.jpg";
import nexa from "../../assets/nexa.jpg";
import "./test.css";
function Testimonials() {
  return (
    <div id="Testimonials">
      <div className="test">
        <div className="test-u">
          <span> 🧡 TESTIMONIALS</span>
          <h1>
            Hear from our <span>Satisfied</span> clients
          </h1>
          <p>
            Discover why our clients love working with us. Read their
            testimonials and learn how we have helped businesses.
          </p>
        </div>

        <div className="test-d">
          <div className="slide">
            <div className="t-card">
              <p>
                The customer support team behind this product is exceptional.
                They have been incredibly responsive and helpful, addressing any
                questions or concerns promptly
              </p>
              <div className="tt-card">
                <img src={alex} alt="personimage" />
                <div className="ttt-card">
                  <h2>Sarah</h2>
                  <h4>Project manager</h4>
                </div>
              </div>
            </div>

            <div className="t-card">
              <p>
                I can't imagine running my business without this product. The
                automation features have saved me hours of manual work, allowing
                me to focus on strategic tasks.
              </p>
              <div className="tt-card">
                <img src={nexa} alt="personimage" />
                <div className="ttt-card">
                  <h2>Alex</h2>
                  <h4>IT manager</h4>
                </div>
              </div>
            </div>

            <div className="t-card">
              <p>
                Manage Wise transformed our team's productivity. The intuitive
                interface and powerful features have made a significant impact
                on our daily operations.
              </p>
              <div className="tt-card">
                <img src={martin} alt="personimage" />
                <div className="ttt-card">
                  <h2>Emily</h2>
                  <h4>Art Director</h4>
                </div>
              </div>
            </div>

            <div className="t-card">
              <p>
                Using this product has been a game-changer for our team. The
                collaboration features and intuitive interface have greatly
                improved our productivity.
              </p>
              <div className="tt-card">
                <img src={nexa} alt="personimage" />
                <div className="ttt-card">
                  <h2>David</h2>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
