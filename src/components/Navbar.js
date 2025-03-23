import React, { useContext, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const NavbarComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <Navbar
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      className="shadow-sm py-2"
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          🎭 EpicPass
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav
            className="me-auto d-lg-flex align-items-center gap-3"
            onClick={() => setExpanded(false)}
          >
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/sports">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/offers">
              Offers
            </Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex mt-2 mt-lg-0" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderRadius: "20px", padding: "8px 12px" }}
            />
            <Button
              type="submit"
              variant={theme === "dark" ? "outline-light" : "outline-dark"}
            >
              🔍
            </Button>
          </Form>

          {/* Sign In & Theme Toggle */}
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/login" className="fw-bold">
              🔑 Sign In
            </Nav.Link>
          </Nav>

          <Button
            className="ms-3 px-3 py-2"
            onClick={toggleTheme}
            variant={theme === "dark" ? "light" : "dark"}
            style={{ borderRadius: "20px", transition: "0.3s ease-in-out" }}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
