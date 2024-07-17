import '../styles/LogInStructure.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function LogInStructure() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [personasList, setPersonasList] = useState([]);

    const getPersonas = () => {
        Axios.get('http://localhost:3001/usuarios').then((response) => {
            setPersonasList(response.data);
        }).catch(() => {
            alert('error');
        });
    }
    
    getPersonas();

    const validarUsuario = (e) => {
        e.preventDefault();
        let userI = document.getElementById('user');
        let passI = document.getElementById('pass');
        let encontrado = false;
        if (personasList.length == 0) {
            alert('No hay usuarios registrados');
            return;
        }
        if (userI.value == '' || passI.value == '') {
            alert('Campos vacíos');
            return;
        }
        console.log(personasList[0].user);
        console.log(personasList[0].pass);
        for (let i = 0; i < personasList.length; i++) {
            if (personasList[i].user == user && personasList[i].pass == pass) {
                encontrado = true;
                break;
            } else {
                encontrado = false;
            }
        }
        if (encontrado) {
            localStorage.setItem('user', user);
            localStorage.setItem('pass', pass);
            window.location.href = 'http://localhost:3000/resena';

        } else {
            alert('Usuario o contraseña incorrectos');
        }
        userI.value = '';
        passI.value = '';
    }

    return (
        <>
            <header className="cabeza">
                <section className="logIn__body logInHide">
                    <section className="logIn logInHide" id="logIn">
                        <section className="logIn__article logInHide">
                            <section className="marca logInHide">
                                <section className="marca__left logInHide">
                                    <img className="logo logInHide" src="images/logo.png" />
                                    <h1 className="marca__titulo logInHide">Log In</h1>
                                </section>
                                <button className="btn-close-logIn logInHide" id="btn-close-logIn"><img className="close logInHide"
                                    src="images/close.png" alt="" /></button>
                            </section>
                            <hr />
                            <form className="form-LogIn logInHide" id="form-LogIn">
                                <article className="form-LogIn__article logInHide">
                                    <section className="form-LogIn__article-section logInHide">
                                        <input className="form-LogIn__article-section-input logInHide" placeholder="Usuario"
                                            type="text" name="user" id="user" onChange={(event) => {
                                                setUser(event.target.value);
                                            }} />
                                        <input className="form-LogIn__article-section-input logInHide" placeholder="Contraseña"
                                            type="password" name="pass" id="pass" onChange={(event) => {
                                                setPass(event.target.value);
                                            }} />
                                    </section>
                                </article>
                                <button className="form-LogIn__input logInHide" id="btn-form-logIn" type="submit" onClick={validarUsuario}>Ingresar</button>
                            </form>
                        </section>
                    </section>
                </section>
            </header>
        </>
    );
}

export default LogInStructure;