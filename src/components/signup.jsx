import React, { useState } from "react";
import '../styles/signup.css';
import { createUser } from "../api.js";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    gender: "",
    email: "",
    registryNumber: "",
    country: "mongolia",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({
        username: form.username,
        password: form.password, // Corrected from form.pass
        last_name: form.lastName,
        first_name: form.firstName,
        gender: form.gender,
        email: form.email,
        registry_number: form.registryNumber,
        country: form.country,
      });
      console.log("User created:", response);
      setSuccess(true);
      setError(null);
      setForm({
        username: "",
        password: "",
        lastName: "",
        firstName: "",
        gender: "",
        email: "",
        registryNumber: "",
        country: "mongolia",
      });
    } catch (err) {
      console.error("Error creating user:", err);
      setError(err.response?.data?.detail || "Something went wrong");
      setSuccess(false);
    }
  };

  return (
    <div className="container-sign">
      <form onSubmit={handleSubmit}>
        <h3>Бүртгүүлэх</h3>
        {error && (
          <div style={{ color: "red" }}>
            {Array.isArray(error) ? (
              error.map((err, index) => (
                <p key={index}>{err.msg}</p>
              ))
            ) : (
              <p>{error}</p>
            )}
          </div>
        )}
        {success && <p style={{ color: "green" }}>Successfully registered!</p>}
        <div className="form-sections">
          <div className="section-left">
            <label htmlFor="username">Нэвтрэх нэр:</label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
            <label htmlFor="password">Нууц үг:</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Овог:</label>
            <input
              type="text"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">Нэр:</label>
            <input
              type="text"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="section-right">
            <label htmlFor="gender">Хүйс:</label>
            <input
              type="text"
              id="gender"
              value={form.gender}
              onChange={handleChange}
            />
            <label htmlFor="email">Мэйл хаяг:</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="registryNumber">Регистерийн дугаар:</label>
            <input
              type="text"
              id="registryNumber"
              value={form.registryNumber}
              onChange={handleChange}
            />
            <label htmlFor="country">Оршин суудаг улс:</label>
            <select id="country" value={form.country} onChange={handleChange}>
              <option value="mongolia">Монгол</option>
              <option value="others">Бусад</option>
            </select>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            БОЛСОН
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;