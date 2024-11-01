import React from "react";
import { useSession } from "../context/sessionProvider.jsx";

const Home = () => {
  const { session, logout } = useSession();

  return (
    <div>
      <h1>Bienvenido, {session.nombre}</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
