import React from "react";
import { useEffect } from "react";
import whatsappIcon from "./assets/whatsapp.svg";
import './App.css';
import AnimatedSection from "./Components/AnimatedScroll/AnimateSection";
import Carousel from "./Components/Carrusel/Carrusel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
   useEffect(() => {
    fetch("https://localhost:7270/ping")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);
  return (

    
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top">

        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.png" alt="logo" width="40" />
        </a> <h5> Tienda Fofi Prueba Git </h5>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <ul className="navbar-nav">
<li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#conocenos">Conócenos</a>
            </li>



            <li className="nav-item">
              <a className="nav-link" href="#precios">Precios</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <Carousel />

      <section id="conocenos" className="container mt-5" >
        <AnimatedSection>
          <h1 className="text-center from-left">Tienda Fofi</h1>

          <p className="from-right" style={{ textAlign: "justify", fontSize: "30px" }}>
            Somos una tienda dedicada a ofrecer los mejores productos y servicios para nuestros clientes. Nos especializamos en la venta de alimentos de alta calidad, accesorios, juguetes y todo lo necesario para el bienestar de tus mascotas.

            En Tienda Fofi nos preocupamos por brindar una atención cercana y personalizada, ayudándote a encontrar exactamente lo que tu mascota necesita, ya sea para su alimentación, cuidado o entretenimiento.

            Nos encontramos ubicados en Los Cipreses 3760, Puente Alto, Santiago de Chile, donde te esperamos con una amplia variedad de productos y el compromiso de siempre entregar calidad, confianza y cariño en cada compra.

          </p>
        </AnimatedSection>



      </section>

      <section id="precios" className="container mt-5">

        <h2 className="text-center mb-4">Precios</h2>

        <AnimatedSection>
          <div className="row">

            <div className="col-md-4">
              <div className="card-precio delay-1">
                <h4>Plan Básico</h4>
                <p>$10.000</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-precio delay-2">
                <h4>Plan Medio</h4>
                <p>$20.000</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-precio delay-3">
                <h4>Plan Premium</h4>
                <p>$30.000</p>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </section>


      <section id="contacto" className="container mt-5">

        <AnimatedSection>
          <h2 className="contacto-animado">Contacto</h2>

          <p className="contacto-animado delay-1">
            Teléfono: +56 9 1234 5678
          </p>
        </AnimatedSection>

      </section>


      {/* FOOTER */}
      <footer className="bg-dark text-white mt-5 p-4">

        <div className="container">

          <div className="row">

            <div className="col-md-5">
              <h5>Redes Sociales</h5>


              <div className="col-md-3">
                <p>
                  <a href="#" className="text-white">Facebook</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <a href="#" className="text-white">Instagram</a>
                </p>
              </div>




            </div>


            <div className="col-md-5">

              <h5>Ubicación</h5>
              <div style={{ width: "300px", height: "200px" }}>
                <iframe
                  src="https://www.google.com/maps?q=Los+Cipreses+3760,+Puente+Alto&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "10px" }}
                  loading="lazy"
                ></iframe>
              </div>

            </div>

          </div>

        </div>

      </footer>



      {/* BOTON WHATSAPP */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          textDecoration: "none"
        }}
      >   <img src={whatsappIcon} alt="WhatsApp" style={{ width: "30px" }} />



      </a>


    </div>
  );
}

export default App;