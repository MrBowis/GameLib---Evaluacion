import React, { useState, useEffect } from 'react';
import Nav from '../components/NavLogIn.jsx';
import Axios from 'axios';
import '../styles/add.css';

function generarOptions(resenas) {
    let options = [];
    if (resenas.length === 0) {
        return options;
    } else {
        options.push(<option className='select-option' value=''>Selecciona una reseña</option>);
    }
    for (let i = 0; i < resenas.length; i++) {
        options.push(<option className='select-option' value={resenas[i].titulo}>{resenas[i].titulo} </option>);
    }
    return options;
}

const Actualizar = () => {

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

    const user = localStorage.getItem('user');
    const [oldTitulo, setOldTitulo] = useState('');
    const [titulo, setNewTitulo] = useState('');
    const [juego, setNewJuego] = useState('');
    const [contenido, setNewContenido] = useState('');
    const [resenas, setResenas] = useState([]);

    const getResenas = () => {
        Axios.get('http://localhost:3001/resena').then((response) => {
            setResenas(response.data);
        }).catch(() => {
            alert('error');
        });
    }

    const putResena = () => {
        Axios.put('http://localhost:3001/update', {
            data: {
                NewContenido: contenido,
                newJuego: juego,
                newTitulo: titulo,
                user: user,
                oldTitulo: oldTitulo
            }
        }).then(() => {
            alert('Reseña actualizada');
        }).catch(() => {
            alert('error');
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        putResena();
    }

    const handleSeleccion = (event) => {
        const valor = event.target.value;
        setOldTitulo(valor);
    };

    getResenas();

    return (
        <div>
            <div className='box__fondo'>
                <section className="fondo"></section>
            </div>
            <Nav></Nav>
            <form className='form-add' onSubmit={handleSubmit}>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Título antiguo:</h1>
                </label>
                <select className='select' value={titulo} onChange={handleSeleccion}>
                    {generarOptions(resenas)}
                </select>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Título nuevo:</h1>
                    <input id='form-add__titulo' className='form-add__input' type="text" value={titulo} onChange={(e) => setNewTitulo(e.target.value)} required />
                </label>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Juego nuevo:</h1>
                    <input id='form-add__juego' className='form-add__input' type="text" value={juego} onChange={(e) => setNewJuego(e.target.value)} required />
                </label>
                <label className='form-add__label'>
                    <h1 className='form-add__h1'>Contenido nuevo:</h1>
                    <textarea id='form-add__contenido' className='form-add__textarea' value={contenido} onChange={(e) => setNewContenido(e.target.value)} required />
                </label>
                <input className='form-add__submit' type="submit" value="Actaulizar" />
            </form>
        </div>
    );
};

export default Actualizar;