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


function slideImage(target) {
  if (target.matches('#previous-arrow')) {
    i--
    i < 0 ? i = 0 : 'range out of scope'
    console.log(i)
    changeIndicator(i)
    changeImage(imagesArr[i])
  }
  else if (target.matches('#next-arrow')) {
    i++
    i > 4 ? i = 4 : 'range out of scope'
    console.log(i)
    changeIndicator(i)
    changeImage(imagesArr[i])
  }
}

function autoSlideImage(i) {
  i > 4 ? i = 4 : 'range out of scope'
  changeIndicator(i)
  changeImage(imagesArr[i])
}

function changeIndicator(i) {
  const nextDot = indicator.children[i].nextElementSibling
  const currentDot = indicator.children[i]
  const previousDot = indicator.children[i].previousElementSibling
  // applies class on current dot
  if (currentDot.classList.contains('dot')) {
    currentDot.classList.remove('dot')
    currentDot.classList.add('active-dot')
    // checks previous and next sibling of the current dot 
    if (i > 0 && previousDot.classList.contains('active-dot')) {
      previousDot.classList.remove('active-dot')
      previousDot.classList.add('dot')
    }
    if (i < 4 && nextDot.classList.contains('active-dot')) {
      nextDot.classList.add('dot')
      nextDot.classList.remove('active-dot')
    }
  }
}


function changeImage(a) {
  img.setAttribute('src', a)
  img.setAttribute('class', 'anim-img')
  setTimeout(() => {
    img.removeAttribute('class', 'anim-img')
  }, 200)
}


let target
main.addEventListener('click', e => {
  target = e.target;
  slideImage(target)
})


setInterval(() => {
  if (i < 4) {
    i++
    autoSlideImage(i)
  } else if (i === 4) {
    i = 0;
    autoSlideImage(i)
  }
}, 1000)

