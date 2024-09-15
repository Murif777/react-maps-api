function Projects() {
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
  ]

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects