const menjanje = document.querySelector('.prekidac')
const navigation = document.querySelector('.navigation')

menjanje.addEventListener('click', () => {
    menjanje.classList.toggle('active')
    navigation.classList.toggle('active')
})