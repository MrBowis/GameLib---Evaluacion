import { useEffect, useState } from 'react'
import LogInStructure from '../screens/LogInStructure'
import Registro from '../screens/Registro'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { setListeners } from '../scripts/main'

const Start = () => {

  useEffect(() => {
    setListeners();
  }, []);

  return (
    <>
      <div className='box__fondo'>
        <section className="fondo"></section>
      </div>
      <LogInStructure />
      <Registro />
      <Nav />
      <section className="cuerpo">
        <aside className="aside">
          <p className="aside__eslogan">
            "Descubre, conoce y comparte en este lugar donde tus reseñas se convierten en inspiración"
          </p>
        </aside>
        <hr className="line" />

        <p className="p">
          Reseñas mas populares
        </p>
        <div className="resenas">
          <div className="celda"><img src="images/imagesJuegos/ApexLegends.jpg" /></div>
          <div className="celda"><img src="images/imagesJuegos/Cyberpunk.jpg" /></div>
          <div className="celda"><img src="images/imagesJuegos/Overwatch.jpg" /></div>
          <div className="celda"><img src="images/imagesJuegos/GTAV.png" /></div>
          <div className="celda"><img src="images/imagesJuegos/RDR2.jpg" /></div>
          <div className="celda"><img src="images/imagesJuegos/Asphalt8.jpg" /></div>
        </div>

        <hr className="line" />
        <p className="p">GameLib te ofrece...</p>

        <section className="contenedor">
          <section className="contenedor__contenido contenedor__contenido-conoce" id="conoce-bg">
            <h2 className="contenedor__contenido-titulo">Conoce</h2>
            <p className="contenedor__contenido-parrafo contenedor__contenido-parrafo-conoce">.</p>
            <img className="contenedor__contenido-img" src="Images/magnifier.png" />
          </section>
          <section className="contenedor__contenido contenedor__contenido-comparte" id="comparte-bg">
            <h2 className="contenedor__contenido-titulo">Comparte</h2>
            <p className="contenedor__contenido-parrafo contenedor__contenido-parrafo-comparte">.</p>
            <img className="contenedor__contenido-img" src="Images/share.png" />
          </section>
          <section className="contenedor__contenido contenedor__contenido-publica" id="publica-bg">
            <h2 className="contenedor__contenido-titulo">Publica</h2>
            <p className="contenedor__contenido-parrafo contenedor__contenido-parrafo-publica">.</p>
            <img className="contenedor__contenido-img" src="Images/upload.png" />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Start;
