import React from 'react';
import '../styles/Footer.css';

const Footer = (() => {
    return (
        <>
            <footer>
                <p>© GameLib 2024</p>
                <section className="footer__right">
                    <img className="img__footer" src="../../images/facebook.png" alt="" />
                    <img className="img__footer" src="../../images/ig.png" alt="" />
                    <img className="img__footer" src="../../images/threads.png" alt="" />
                </section>
            </footer>
        </>
    );
});

export default Footer;