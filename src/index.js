import './style.css'
import shopImg from './resources/img/pexels-esranur-kalay-9830153.jpg'
import tablesImg from './resources/img/pexels-lisa-fotios-13972514.jpg'
import telephoneImg from './resources/img/pexels-lokman-sevim-9704111.jpg'
import cameraImg from './resources/img/pexels-tahir-osman-13859770.jpg'
import machineImg from './resources/img/pexels-алесь-усцінаў-9932622.jpg'

const main = document.querySelector('main')
const img = document.getElementById('image')

const imagesArr = [shopImg, tablesImg, telephoneImg, cameraImg, machineImg]
img.src = imagesArr[0]

let i = 0
main.addEventListener('click', e => {
  const target = e.target;
  slideImage(target)
})

function slideImage(target) {

  if (target.matches('#previous-arrow')) {
    i--
    i < 0 ? i = 0 : 'array out of scope'
    console.log(i)
    changeImage(imagesArr[i])
  }
  else if (target.matches('#next-arrow')) {
    i++
    i > 4 ? i = 4 : 'array out of scope'
    console.log(i)
    changeImage(imagesArr[i])
  }

}

function changeImage(a) {
  img.src = a;
}
