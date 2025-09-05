// src/utils/api.js
export const apiUrl = "ats-system-production.up.railway.app/api"; // Replace with your backend API

export const request = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const res = await fetch(`${apiUrl}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  return res.json();
};
