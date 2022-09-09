import * as React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './App.css';
import Widgets from "./Widgets"



function App() {
  return (
    <div className="app">
      {/* Side Bar */};

      <Sidebar />;

      {/* Feed */};

      <Feed />

      {/* Widget (What's happening) */};

      <Widgets />

    </div>
  );
}

export default App;
