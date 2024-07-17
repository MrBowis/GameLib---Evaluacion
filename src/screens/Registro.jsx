import '../styles/LogInStructure.css';
import Axios from 'axios';
import { useState } from 'react';

function Registro() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = () => {
        Axios.get('http://localhost:3001/usuarios').then((response) => {
            setUsuarios(response.data);
        }).catch(() => {
            console.log('error');
        });
    }

    const add = () => {
        Axios.post('http://localhost:3001/create', {
            user: user,
            pass: pass,
        }).then(() => {
            console.log('success');
        }).catch(() => {
            console.log('error');
        });
    }

    const saveUser = (e) => {
        e.preventDefault();
        let userI = document.getElementById('userR');
        let passI = document.getElementById('passR');
        if (userI.value == '' || passI.value == '') {
            alert('Campos vacíos');
            return;
        }
        if(usuarios.find((usuario) => usuario.user === userI.value) != null){
            alert('Usuario ya registrado');
            return;
        }
        add();
        alert('Usuario registrado');
        userI.value = '';
        passI.value = '';
    }

    getUsuarios();

    return (
        <>
            <header className="cabeza">
                <section className="registro__body registroHide">
                    <section className="registro registroHide" id="registro">
                        <section className="registro__article registroHide">
                            <section className="marca registroHide">
                                <section className="marca__left registroHide">
                                    <img className="logo registroHide" src="images/logo.png" />
                                    <h1 className="marca__titulo registroHide">Registro</h1>
                                </section>
                                <button className="btn-close-registro registroHide" id="btn-close-registro"><img className="close registroHide"
                                    src="images/close.png" alt="" /></button>
                            </section>
                            <hr />
                            <form className="form-registro registroHide" id="form-registro">
                                <article className="form-registro__article registroHide">
                                    <section className="form-registro__article-section registroHide">
                                        <input className="form-registro__article-section-input registroHide" placeholder="Usuario"
                                            type="text" name="user" id="userR" onChange={(event) => {
                                                setUser(event.target.value);
                                            }} />
                                        <input className="form-registro__article-section-input registroHide" placeholder="Contraseña"
                                            type="password" name="pass" id="passR" onChange={(event) => {
                                                setPass(event.target.value);
                                            }} />
                                    </section>
                                </article>
                                <button className="form-registro__input registroHide" id="btn-form-registro" type="submit" onClick={saveUser}>Registrar</button>
                            </form>
                        </section>
                    </section>
                </section>
            </header>
        </>
    );
}

export default Registro;