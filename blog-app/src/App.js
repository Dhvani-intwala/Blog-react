import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">My World Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Destinations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Categories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Gallary</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
}

export default App;
