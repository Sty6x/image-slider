import './style.css'
import shopImg from './resources/img/pexels-esranur-kalay-9830153.jpg'
import tablesImg from './resources/img/pexels-lisa-fotios-13972514.jpg'
import telephoneImg from './resources/img/pexels-lokman-sevim-9704111.jpg'
import cameraImg from './resources/img/pexels-tahir-osman-13859770.jpg'
import machineImg from './resources/img/pexels-алесь-усцінаў-9932622.jpg'

const myImg = new Image()
// myImg.src = shopImg;
// myImg.src = telephoneImg;
const main = document.querySelector('main')
const previousArrow = document.getElementById('previous-arrow')
const nextArrow = document.getElementById('next-arrow')


main.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('#previous-arrow')) {
    console.log(target)
    changeImage(shopImg)
  }
  else if (target.matches('#next-arrow')) {
    changeImage(telephoneImg)
    console.log(target)
  }

})
function changeImage(a) {
  document.getElementById('image').src = a;
}
