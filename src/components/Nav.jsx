import React from 'react';
import '../styles/Nav.css';

const nav = () => {
    return (
        <div>
            <nav className="top">
                <ul className="top__opciones">
                    <div className='top-left'>
                        <li>
                            <a href="http://localhost:3000"><img className="logo" src="images/logo.png" />
                                <p>GameLib</p>
                            </a>
                        </li>
                    </div>
                    <div className='top-right'>
                        <li className="top__opciones-right">
                            <button className="opcion" id="btn-logIn">Log In</button>
                        </li>
                        <li className="top__opciones-right">
                            <button className="opcion" id="btn-registro">Registro</button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default nav;