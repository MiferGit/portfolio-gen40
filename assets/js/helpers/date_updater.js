function updateDateYear() {
    const currenYear = new Date().getFullYear();

    const copurightElement = document.querySelector('.footer__copy');

    copurightElement.textContent = `© ${currenYear}, Todos los derechos reservados`;

};

export default updateDateYear;