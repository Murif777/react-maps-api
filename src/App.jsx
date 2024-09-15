import Header from './components/Header'
import Footer from './components/Footer'
import MapComponent  from './components/map'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
       {/* <About />
        <Projects />
        <Contact />*/}
        <MapComponent/>
      </main>
      <Footer />
    </div>
  )
}

export default App