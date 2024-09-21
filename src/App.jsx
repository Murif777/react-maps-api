import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/map';
import SideBar from './components/Rutabar';
import { Container, Row, Col } from 'react-bootstrap';
import LugaresBar from './components/Options';
import WelcomeMessage from './components/Welcome';

import { useState, useEffect } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);

  // Mostrar el modal cuando el componente se monta
  useEffect(() => {
    setShowModal(true);
  }, []);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <WelcomeMessage show={showModal} onHide={handleClose} />
      <Header />
      {/*<LugaresBar/>*/}
      <Container fluid>
        <Row>
          <Col xs={12} md={4} className="p-3">
            <SideBar />
          </Col>
          <Col xs={12} md={8} className="p-3">
            <MapComponent />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
