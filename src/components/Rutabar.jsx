import { Form, FloatingLabel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function SideBar() {
    return (
      <div style={sidebarStyle}>
        <h5>Opciones de ruta</h5>
        <div className="mb-3">
          <FormFloatingSelectExample />
        </div>
        <div className="mb-3">
          <FormFloatingSelectDestination/>
        </div>
        <div className="mb-3">
          <LoadingButton />
        </div>
      </div>
    );
  }
  function FormFloatingSelect({ controlId, label, options }) {
    return (
      <FloatingLabel controlId={controlId} label={label}>
        <Form.Select aria-label={`Floating label select for ${label}`}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    );
  }
  function FormFloatingSelectExample() {
    const options = [
      { value: "", label: "Ninguno" },
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ];
    return <FormFloatingSelect controlId="floatingSelect" label="Seleccione lugar de partida" options={options} />;
  }
  
  function FormFloatingSelectDestination() {
    const options = [
      { value: "", label: "Ninguno" },
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ];
    return <FormFloatingSelect controlId="floatingSelectDestination" label="Seleccione lugar de destino" options={options} />;
  }  

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="success"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Cargando... ' : 'Buscar'}
    </Button>
  );
}
const sidebarStyle = {
    height: "75vh",
    width: "100%",
    padding: '20px',
    overflowY: 'auto',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
  };
  
export default SideBar;
