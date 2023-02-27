const containerNavbar = document.querySelector 
('.container .navbar');

document.querySelector('#menu').onclick = () => {
    containerNavbar.classList.toggle('active');
}
