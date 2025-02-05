/* Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 120
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId+ ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId+ ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* Change Background Header */
function scrollHeader(){
    const header = document.getElementById('header')
    const scrollThreshold = window.innerWidth < 576 ? 1267 : 750;
    //if(this.scrollY >= 750) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

    if (this.scrollY >= scrollThreshold) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader)

/* Show Scroll Top */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/* Mixup Filter Portfolio */
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/* GSAP Annimation */
gsap.from('.home__img',{opacity: 0, duration: 1, delay:.25, x:60})
gsap.from('.home__data',{opacity: 0, duration: 1, delay:.3, y:25})
gsap.from('.home__greeting, .home__name, .home__profession',{opacity: 0, duration: 1, delay:.25, y:25, ease:'expo.out', stagger:.2})

gsap.from('.nav__logo, .nav__toggle',{opacity: 0, duration: 1, delay:.35, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__item',{opacity: 0, duration: 1, delay:.35, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home__social-icon',{opacity: 0, duration: 1, delay:.45, y:25, ease:'expo.out', stagger:.2})

/* Typewriter Annimation */
const typewriter = (txtElement, words, wait = 500) => {
    let currentWordIndex = 0;
    let currentTextIndex = 0;
    let isDeleting = false;
    const txt = txtElement.innerHTML;
    const type = () => {
      const currentWord = words[currentWordIndex];
      const isEnd = currentTextIndex === currentWord.length;
      if (isEnd && !isDeleting) {
        setTimeout(() => {
          isDeleting = true;
        }, wait);
      }
      if (isDeleting) {
        txtElement.innerHTML = currentWord.substring(0, currentTextIndex - 1);
        currentTextIndex--;
        if (currentTextIndex === 0) {
          isDeleting = false;
          currentWordIndex++;
          if (currentWordIndex === words.length) {
            currentWordIndex = 0;
          }
        }
      } else {
        txtElement.innerHTML = currentWord.substring(0, currentTextIndex + 1);
        currentTextIndex++;
      }
      setTimeout(type, 50);
    };
    setTimeout(type, 50);
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const professionElement = document.querySelector("#home__profession");
    const words = ["Mechanical Engineer turned Software Developer", "Web Developer", "Computer Science Student"];
    setTimeout(() => {
        typewriter(professionElement, words);
      }, 1000);
});

/* Home Annimation */
document.querySelector('.home').classList.add('show');
