import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";
import "../styles/login.css";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    type: "", // "success" or "error"
    show: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users. Please try again.");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log("Notification state:", notification);
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError("Please enter both username and password.");
      setNotification({
        message: "Please enter both username and password.",
        type: "error",
        show: true,
      });
      console.log("Notification set (invalid input):", {
        message: "Please enter both username and password.",
        type: "error",
        show: true,
      });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000); // Hide after 3 seconds
      return;
    }

    try {
      const user = users.find(
        (user) =>
          user.account_name === form.username && user.user_password === form.password
      );
      if (user) {
        setError("");
        onLogin(user);
        setForm({ username: "", password: "" });
        navigate(-1);
        setNotification({
          message: "Login successful!",
          type: "success",
          show: true,
        });
        console.log("Notification set (success):", {
          message: "Login successful!",
          type: "success",
          show: true,
        });
      } else {
        setError("Invalid username or password.");
        setNotification({
          message: "Invalid username or password.",
          type: "error",
          show: true,
        });
        console.log("Notification set (invalid credentials):", {
          message: "Invalid username or password.",
          type: "error",
          show: true,
        });
        setTimeout(() => setNotification({ ...notification, show: false }), 3000); // Hide after 3 seconds
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      setNotification({
        message: "Login failed. Please try again.",
        type: "error",
        show: true,
      });
      console.log("Notification set (error):", {
        message: "Login failed. Please try again.",
        type: "error",
        show: true,
      });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000); // Hide after 3 seconds
    }
  };

  return (
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="txtfieldLogin">Нэвтрэх Нэр:</label>
        <input
          type="text"
          id="txtfieldLogin"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value.trim() })}
          required
          autoComplete="username"
        />
        <label htmlFor="password">Нууц үг:</label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          autoComplete="current-password"
        />
        {notification.show && (
          <div className={`notification ${notification.type} ${notification.show ? "show" : ""}`}>
            {notification.message}
          </div>
        )}
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Нэвтрэх
          </button>
        </div>
      </form>
      <p>
        Хэрэв бүртгэлгүй бол <Link to="/signup">БҮРТГҮҮЛЭХ</Link>.
      </p>
    </div>
  );
}

export default Login;