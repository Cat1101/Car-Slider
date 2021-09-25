const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const SLIDE_COUNT = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${SLIDE_COUNT-1}00vh`

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowUp'){
    changeSlide('up')
  }else if(e.key === 'ArrowDown'){
    changeSlide('down')
  }
})

function changeSlide(direction){
  if(direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex === SLIDE_COUNT){
      activeSlideIndex = 0
    }
  }else if (direction === 'down'){
    activeSlideIndex--
    if(activeSlideIndex < 0){
      activeSlideIndex = SLIDE_COUNT - 1
    }
  }
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}