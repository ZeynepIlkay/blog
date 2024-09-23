import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScroll({ searchTerm, handleSearchChange }) {

  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Gezgin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <NavDropdown title="Kategoriler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/Denizce">Denizce</NavDropdown.Item>
              <NavDropdown.Item href="/category/Karasal">Karasal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/Kararsizlar">Kararsızlar için...</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/profile">
              Profilim
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;