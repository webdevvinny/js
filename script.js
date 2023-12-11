
document.getElementsByClassName('sign-up-button')[0].addEventListener('click', displayForm);

function displayForm(){
    document.getElementsByClassName('pop-up-form')[0].classList.add('form-display');
    document.getElementsByClassName('pop-up-form')[0].style.display = 'flex';

    document.getElementsByClassName('sign-up-button')[0].style.display = 'none';
    document.querySelector('p').innerHTML = 'Button Clicked';
}


document.querySelector('.submit-button').onclick = function () {
    let h = document.querySelector('.h5');
    h.style.display = 'block';
    document.getElementsByClassName('sign-up-button')[0].style.display = 'none';

    setInterval(
        () => {
            h.style.display = 'none';
        },
        5000
    )

}