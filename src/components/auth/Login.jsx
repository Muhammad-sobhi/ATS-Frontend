// src/components/auth/Login.jsx
import React, { useState } from "react";
import { request } from "../common/http";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const data = await request("login", "POST", form);

    if (data.status === 200) {
      // 🧹 Clear old session before saving new one
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // ✅ Save token
      localStorage.setItem("token", data.data.token);
      setToken(data.data.token);

      // ✅ Save user info (with role) for role-based UI
      if (data.data.user) {
        localStorage.setItem("user", JSON.stringify(data.data.user));
      }

      navigate("/"); // redirect after login
    } else {
      setMessage(data.message || "Login failed");
    }
  } catch (err) {
    setMessage("Something went wrong");
  }
};


  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
