import React from "react";
import { SessionProvider, useSession } from "./context/sessionProvider.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const AppContent = () => {
  const { session } = useSession();

  return (
    <Routes>
      <Route path="/" element={session ? <Home /> : <Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <SessionProvider>
      <Router>
        <AppContent />
      </Router>
    </SessionProvider>
  );
}

export default App;
