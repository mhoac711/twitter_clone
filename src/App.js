import * as React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './App.css';



function App() {
  return (
    <div className="app">
      {/* Side Bar */};

      <Sidebar />;

      {/* Feed */};

      <Feed />

      {/* Widget (What's happening) */};

    </div>
  );
}

export default App;
