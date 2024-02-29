const radiobuttons = document.querySelectorAll('.toggle__wrapper input');
for (let i=0; i < radiobuttons.length; i++){
    radiobuttons[i].addEventListener('click',event => {
        document.getElementById('dark').checked ? (document.querySelector('body').classList='dark'):
        (document.querySelector('body').classList='light');
    })
}

