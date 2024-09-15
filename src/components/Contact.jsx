function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="name" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje:</label>
                <textarea className="form-control" id="message" rows="2" required></textarea>
              </div>
              <button type="submit" className="btn btn-outline-danger">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact