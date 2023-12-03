import React from "react";
import "./pri.css";

function Prising() {
  return (
    <div id="Pricing">
      <div className="pri">
        <div className="pri-u">
          <span>💲 PRICING</span>
          <h2>
            Select your ideal <span>Pricing</span> plan
          </h2>
          <p>
            At Manage Wise, we believe in providing you with <br />
            pricing plans that adapt to your unique needs.
          </p>
        </div>
        <div className="pri-d">
          <div className="pri-card">
            <span>FREE</span>
            <div>
              <h2>$0</h2>
              <span>/month</span>
            </div>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
            </ul>
            <button>Get started</button>
          </div>
          <div className="pri-card pri-card-b">
            <span>STANDARD</span>
            <div>
              <h2>$25</h2>
              <span>/month</span>
            </div>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
              <li>3+ integrations</li>
              <li>Account performance reporting</li>
            </ul>
            <button>Get started</button>
          </div>
          <div className="pri-card">
            <span>BUSINESS</span>
            <div>
              <h2>$42</h2>
              <span>/month</span>
            </div>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
              <li>3+ integrations</li>
            </ul>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prising;
