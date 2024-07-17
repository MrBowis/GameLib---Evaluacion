import React, { useState, useEffect } from 'react';
import Nav from '../components/NavLogIn.jsx';
import Axios from 'axios';
import '../styles/add.css';

const add = () => {

    const imTitle = document.getElementById('form-add__titulo');
    const imJuego = document.getElementById('form-add__juego');
    const imContenido = document.getElementById('form-add__contenido');

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
    }, []);

    const [titulo, setTitulo] = useState('');
    const [juego, setJuego] = useState('');
    const [contenido, setContenido] = useState('');

    const postResena = () => {
        console.log(contenido);
        Axios.post('http://localhost:3001/resena', {
            user: localStorage.getItem('user'),
            juego: juego,
            titulo: titulo,
            contenido: contenido
        }).then(() => {
            alert('success');
        }).catch(() => {
            alert('error');
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postResena();
        imTitle.value = '';
        imJuego.value = '';
        imContenido.value = '';
    }

    return (
        <div>
            <div className='box__fondo'>
                <section className="fondo"></section>
            </div>
            <Nav></Nav>
            <form className='form-add' onSubmit={handleSubmit}>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Título:</h1>
                    <input id='form-add__titulo' className='form-add__input' type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </label>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Juego:</h1>
                    <input id='form-add__juego' className='form-add__input' type="text" value={juego} onChange={(e) => setJuego(e.target.value)} required />
                </label>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Contenido:</h1>
                    <textarea id='form-add__contenido' className='form-add__textarea' value={contenido} onChange={(e) => setContenido(e.target.value)} required />
                </label>
                <input className='form-add__submit' type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default add;