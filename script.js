

document.getElementById('load').onclick = () => {
  let element = document.getElementsByClassName('rotate-border')[0];
  element.style.display = 'block';
}


function rotateElement () {
  let element =  document.getElementsByClassName('rotate-border')[0];

let clearInt = setInterval(
    () => {
        element.classList.add('remove-border');
       clearInterval(clearInt);
    }, 2000

)

     setInterval(
    () => {
        element.classList.remove('rotate-border');

    }, 4020
)

}


rotateElement();