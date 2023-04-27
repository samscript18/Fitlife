const navBar = document.getElementById("navbar");
const linksContainer = document.querySelector(".link-container");
const Links = document.querySelector(".navbar-brand");
const scrollLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector(".nav-toggle");
const section = document.querySelectorAll('section');
const closeBtn = document.querySelector('.nav-close');
const heroBtn = document.querySelector('.navbar-brand .btn');


navToggle.addEventListener("click", () => {
  Links.classList.add('show-links');
  closeBtn.classList.add('show-toggle');
  heroBtn.classList.add('hide-btn');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', () => {
      Links.classList.remove("show-links");
    })
  })

});
closeBtn.addEventListener('click', () => {
  Links.classList.remove('show-links');
  closeBtn.classList.remove("show-toggle");
})

// ********** fixed navbar ************

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed');
  } else {
    navBar.classList.remove('fixed');
  }

  const topLink = document.querySelector(".back-top-btn");

  if (scrollHeight > 500) {
    topLink.classList.add('visible');
  } else {
    topLink.classList.remove('visible');
  }
})



// ********** smooth scroll ************
// select links




window.onscroll = () => {
  section.forEach((sec) => {
  const Top = window.scrollY;
  const Offset = sec.offsetTop - 170;
  const Height = sec.offsetHeight;
  const Id = sec.getAttribute("id");

  if (Top >= Offset && Top < Offset + Height) {
    scrollLinks.forEach((links) => {
      links.classList.remove("active");
      document.querySelector("header .navbar-brand a[href*=" + Id + "]").classList.add("active");
    });  
  }
  })
}


  scrollLinks.forEach((links) => {
  links.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixed');
    let position = element.offsetTop - navHeight;
    if (fixedNav) {
      position = position - navHeight;
    }
    if (!fixedNav) {
      position = position - navHeight - navHeight;
    }
    if (navHeight > 80) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
  })
})







const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const Imgdate = document.querySelectorAll('#date');
const Footerdate = document.querySelector('.date');

const Year = new Date().getFullYear();
const Month = new Date().getMonth();
const Day = new Date().getDate();

Imgdate.forEach((item) => {
  item.innerText = `${Day} ${months[Month]} ${Year}`;
});
Footerdate.innerText = `${Year}`;

