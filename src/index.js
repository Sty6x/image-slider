import './style.css'
import shopImg from './resources/img/pexels-esranur-kalay-9830153.jpg'
import tablesImg from './resources/img/pexels-lisa-fotios-13972514.jpg'
import telephoneImg from './resources/img/pexels-lokman-sevim-9704111.jpg'
import cameraImg from './resources/img/pexels-tahir-osman-13859770.jpg'
import machineImg from './resources/img/pexels-алесь-усцінаў-9932622.jpg'

const main = document.querySelector('main')
const img = document.getElementById('image')
const indicator = document.getElementById('indicator')
let i = 0

const imagesArr = [shopImg, tablesImg, telephoneImg, cameraImg, machineImg]
img.src = imagesArr[0]

main.addEventListener('click', e => {
  const target = e.target;
  slideImage(target)
})

function slideImage(target) {

  if (target.matches('#previous-arrow')) {
    i--
    i < 0 ? i = 0 : 'array out of scope'
    console.log(i)
    changeIndicator(i)
    changeImage(imagesArr[i])
  }
  else if (target.matches('#next-arrow')) {
    i++
    i > 4 ? i = 4 : 'array out of scope'
    console.log(i)
    changeIndicator(i)
    changeImage(imagesArr[i])
  }

}
function changeIndicator(i) {
  if (indicator.children[i].classList.contains('dot')) {
    indicator.children[i].classList.remove('dot')
    indicator.children[i].classList.add('active-dot')
    console.log(indicator.children[i].previousElementSibling)
    if (indicator.children[i].previousElementSibling.classList.contains('active-dot')) {
      indicator.children[i].previousElementSibling.classList.remove('active-dot')
      indicator.children[i].previousElementSibling.classList.add('dot')
    }
    else if (indicator.children[i].nextElementSibling.classList.contains('active-dot')) {
      indicator.children[i].nextElementSibling.classList.add('dot')
      indicator.children[i].nextElementSibling.classList.remove('active-dot')
    }
  }
}


function changeImage(a) {
  img.src = a;
}
