import React, { useState, useEffect } from "react";
import { useSession } from "../context/sessionProvider.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, loading, error, session } = useSession();
  const [credentials, setCredentials] = useState({
    email: "",
    contrasenia: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  useEffect(() => {
    if (session) {
      navigate("/home");
    }
  }, [session, navigate]);

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="contrasenia"
          value={credentials.contrasenia}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
