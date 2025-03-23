import React, { useState, useContext } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful!");
      navigate("/"); // Redirect to homepage
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className={`p-4 shadow ${
          theme === "dark" ? "bg-dark text-white" : "bg-light"
        }`}
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h2 className="text-center mb-3">🔑 Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant={theme === "dark" ? "light" : "dark"}
            type="submit"
            className="w-100"
          >
            Login
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <p className="text-center">
          <Link to="/">⬅ Back to Home</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
