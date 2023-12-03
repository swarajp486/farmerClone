import React from "react";
import { ManageWindowSize } from "./ContextApi/WindowSize";
import "./App.css";
import AppContent from "./AppContent";

const App = () => {
  return (
    <ManageWindowSize>
      <AppContent />
    </ManageWindowSize>
  );
};

export default App;
