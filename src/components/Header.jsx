import { Backpack } from 'lucide-react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import Options from './Options';
function Header() {
  return (
    <header style={headerStyle}className="bg-dark">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Options/>
            <Navbar.Brand href="#">
              <Image 
                src="https://www.unicesar.edu.co/wp-content/uploads/2024/05/LOGO-UPC-VERDE-2.png" 
                alt="Logo" 
                width={140} // Ajusta el ancho según tus necesidades
                height={50} // Ajusta la altura según tus necesidades
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            
            {/*<Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">Sobre mí</Nav.Link>
                <Nav.Link href="#projects">Proyectos</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>*/}
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}
const headerStyle={
    height:"70px",
    padding:"0px"
};
export default Header;
