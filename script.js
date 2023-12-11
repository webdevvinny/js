
document.getElementsByClassName('sign-up-button')[0].addEventListener('click', displayForm);

function displayForm(){
    document.getElementsByClassName('pop-up-form')[0].classList.add('form-display');
    document.getElementsByClassName('pop-up-form')[0].style.display = 'flex';

    document.getElementsByClassName('sign-up-button')[0].style.display = 'none';
    document.querySelector('p').innerHTML = 'Button Clicked';

    document.querySelector('.pop-up-container').style.backgroundColor = "rgba(230, 109, 12, 0.5)";
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
    );

    document.getElementsByClassName('pop-up-form')[0].classList.add('form-remove');

    setInterval(
        () => {
            document.getElementsByClassName('pop-up-form')[0].style.display = 'none';
        }
        , 1000
    )

}