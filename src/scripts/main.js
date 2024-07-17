function bloquearScroll() {
    var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    var bodyWidth = document.body.clientWidth;
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.overflow = 'hidden';
    document.body.style.width = bodyWidth + 'px';
}

function desbloquearScroll() {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
}

function changeColor(id) {
    var colors = ['#38725b', '#4b5dab', '#a4587b', '#d8b24a', '#826dbf', '#d8805e', '#4e9791', '#8c8c8c', '#e0a48f', '#81b7cf'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById(id).style.backgroundColor = randomColor;
}

export function setListeners() {

    document.getElementById('btn-registro').addEventListener('click', () => {
        var elements = document.getElementsByClassName('registroHide');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display == 'flex') {
                elements[i].style.display = 'none';
                desbloquearScroll();
            } else {
                elements[i].style.display = 'flex';
                bloquearScroll();
            }
        }
    });

    document.getElementById('btn-close-registro').addEventListener('click', () => {
        var elements = document.getElementsByClassName('registroHide');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display == 'flex') {
                elements[i].style.display = 'none';
                desbloquearScroll();
            } else {
                elements[i].style.display = 'flex';
                bloquearScroll();
            }
        }
    });

    document.getElementById('btn-logIn').addEventListener('click', () => {
        var elements = document.getElementsByClassName('logInHide');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display == 'flex') {
                elements[i].style.display = 'none';
                desbloquearScroll();
            } else {
                elements[i].style.display = 'flex';
                bloquearScroll();
            }
        }
    });

    document.getElementById('btn-close-logIn').addEventListener('click', () => {
        var elements = document.getElementsByClassName('logInHide');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display == 'flex') {
                elements[i].style.display = 'none';
                desbloquearScroll();
            } else {
                elements[i].style.display = 'flex';
                bloquearScroll();
            }
        }
    });

    changeColor('conoce-bg');
    changeColor('comparte-bg');
    changeColor('publica-bg');

    document.getElementById('conoce-bg').addEventListener('mouseover', function () {
        changeColor('conoce-bg');
    });

    document.getElementById('comparte-bg').addEventListener('mouseover', function () {
        changeColor('comparte-bg');
    });

    document.getElementById('publica-bg').addEventListener('mouseover', function () {
        changeColor('publica-bg');
    });
}
