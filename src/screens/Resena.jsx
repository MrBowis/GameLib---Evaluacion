import React from "react";
import { useEffect, useState } from "react";
import "../styles/Resena.css";
import Footer from '../components/Footer.jsx';
import Nav from '../components/NavLogIn.jsx';
import Axios from 'axios';

function toAdd() {
  window.location.href = 'http://localhost:3000/add';
}

function toDelete() {
  window.location.href = 'http://localhost:3000/delete';
}

function toUpdate() {
  window.location.href = 'http://localhost:3000/update';
}

function Resena() {

  const user = localStorage.getItem('user');
  const [resenas, setResenas] = useState([]);
  const [juego, setJuego] = useState('');
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [search, setSearch] = useState('');
  let resenasS = [];

  useEffect(() => {

    if (localStorage.getItem('user') == null) {
      window.location.href = 'http://localhost:3000';
    }

    document.getElementById('btn-logOut').addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'http://localhost:3000';
    });

    document.getElementById('btn-resenas').addEventListener('click', () => {
      window.location.href = 'http://localhost:3000/resena';
    });

    document.getElementById('btn-search').addEventListener('click', () => {
      let search = document.getElementById('ipt-search').value;
      let resenas = document.getElementsByClassName('resenia');
      for (let i = 0; i < resenas.length; i++) {
        if (resenas[i].textContent.toLowerCase().includes(search.toLowerCase())) {
          resenas[i].style.display = 'flex';
        } else {
          resenas[i].style.display = 'none';
        }
      }
    });

  }, []);

  const resenaCard = (title, game, content) => {

    return (
      <section className="resenia">
        <section className="letras">
          <h1 className="titulo-resena" id="titulo">{title}</h1>
          <h1 className="juego-resena" id="juego">{game}</h1>
          <p className="contenido-resena" id="contenido">{content}</p>
        </section>
      </section>
    );
  }

  const createResena = () => {
    for (let i = 0; i < resenas.length; i++) {
      if (resenas[i].user == localStorage.getItem('user')) {
        resenasS.push(resenaCard(resenas[i].juego, resenas[i].titulo, resenas[i].contenido));
      }
    }
    return resenasS;
  }

  const getResenas = () => {
    Axios.get('http://localhost:3001/resena').then((response) => {
      setResenas(response.data);
    }).catch(() => {
      alert('error');
    });
  }

  getResenas();

  return (
    <>
      <Nav />
      <section className="container">
        <section>
          <section className="barra_busqueda">
            <button className="btn-add" onClick={toAdd}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <button className="btn-edit fa-solid fa-pencil" onClick={toUpdate}></button>
          <button className="btn-delete fa-solid fa-trash" onClick={toDelete}></button>
            <input type="text" placeholder="Buscar" className="ipt-search" id="ipt-search" onChange={
              (e) => {
                setSearch(e.target.value);
              }
            } />
            <button className="btn-search" id="btn-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </section>
        </section>
        <section className="container-resena">
          <h1 className="titulo-container">RESEÑAS</h1>
          <hr></hr>
          <section className="container-resenia_child">
            {
              createResena()
            }
          </section>
        </section>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Resena;
