import Header from './componentes/Header'
import Card from './componentes/Card'
import Footer from './componentes/Footer'
import './App.css'

export default function App() {

  return (
    <div className="layout">

      <main className="main">
        <Header />
        <section className="container">
          <h2 className="section-title">APLICAÇÕES</h2>
          <div className="apps-grid">
            <Card />
          </div>
        <Footer />


        </section>
      </main>
    </div>
  )
}
