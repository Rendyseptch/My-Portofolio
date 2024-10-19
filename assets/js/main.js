/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

      /*********menu show *************/
    //   validate if constant exist
    if (navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }
    /*********menu Hidden*************/
    //   validate if constant exist
    if (navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu'); 
    // When clicked, nav-menu will remove the menu
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', LinkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => { 
 const header = document.getElementById('header')

 this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_66814rb', 'template_lrlnr0c', '#contact-form', 'JE7UMA5y85h2P89Pw')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully'
    
    // SRemove mesege after 5 scd
    setTimeout(() =>{
        contactMessage.textContent= ''
    }, 5000)
    // Clear input 
    contactform.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = `Message not sent (service error) `
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = ()=>{
    const scrollup =document.getElementById('scrollup')
    this.scrollY>= 350 ? scrollup.classList.add(show-scroll)
    : scrollup.classList.remove('show-scroll')
}
window/addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
