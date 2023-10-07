import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const urlApi = "http://localhost:8080/api/v1/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    setTimeout(() => {
      setAlerta("");
    }, 3500);
  }, [alerta]);

  const verifyCredentials = async () => {
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status == 401) {
      const { msg } = await response.json();
      return setAlerta(msg);
    } else if (response.status == 500) {
      return setAlerta('Error de conexión al servidor')
    } else {
      const { token } = await response.json();
      localStorage.setItem('x-auth-token', token);
      (() => navigate('/home'))()
    }
  };

  return (
    <div className="login-container">
      <div
        style={{ backgroundColor: "red" }}
        className={`alerta ${!alerta ? "ocultar" : ""}`}
      >
        {alerta}
      </div>
      <div className="login">
        <div className="login-text">
          <h2>¡Bienvenido de vuelta!</h2>
          <h4>Por favor ingresa tus datos</h4>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <div className="btn-block">
          <button className="login-btn" onClick={(e) => verifyCredentials()}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
