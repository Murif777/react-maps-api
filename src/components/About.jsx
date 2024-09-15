function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Sobre mí</h2>
        <p className="text-center mb-4">
          Soy un desarrollador apasionado por crear soluciones innovadoras...
        </p>
        <div className="d-flex justify-content-center">
          <span className="badge bg-primary me-2">Habilidad 1</span>
          <span className="badge bg-primary me-2">Habilidad 2</span>
          <span className="badge bg-primary">Habilidad 3</span>
        </div>
      </div>
    </section>
  )
}

export default About