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

const Dele = () => {

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
    const [titulo, setTitulo] = useState('');
    const [resenas, setResenas] = useState([]);

    const getResenas = () => {
        Axios.get('http://localhost:3001/resena').then((response) => {
            setResenas(response.data);
        }).catch(() => {
            alert('error');
        });
    }

    const deleteResena = (user, titulo) => {
        Axios.delete('http://localhost:3001/resena', {
            data: {
                user: user,
                titulo: titulo
            }
        }).then(() => {
            alert('Reseña eliminada');
            getResenas();
        }).catch(() => {
            alert('error');
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        deleteResena(user, titulo);
    }

    const handleSeleccion = (event) => {
        const valor = event.target.value;
        setTitulo(valor);
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
                    <h1 className='form-add__h1'>Título:</h1>
                    <select className='select' value={titulo} onChange={handleSeleccion}>
                        {generarOptions(resenas)}
                    </select>
                </label>
                <input className='form-add__submit' type="submit" value="Eliminar" />
            </form>
        </div>
    );
};

export default Dele;