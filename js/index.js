const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};
let s = siteContent;

let logo = document.getElementById("logo-img");
logo.setAttribute("src", s["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", s["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", s["main-content"]["middle-img-src"]);

let navBar = document.querySelectorAll("nav a");
navBar.forEach((value, index) => {
  value.textContent = s.nav[`nav-item-${index + 1}`];
});

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = s.cta.h1;

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = s.cta.button;

let topH4 = document.querySelectorAll(".main-content .top-content h4");
topH4[0].textContent = s["main-content"]["features-h4"];
topH4[1].textContent = s["main-content"]["about-h4"];

let bottomH4 = document.querySelectorAll(".main-content .bottom-content h4");
bottomH4[0].textContent = s["main-content"]["services-h4"];
bottomH4[1].textContent = s["main-content"]["product-h4"];
bottomH4[2].textContent = s["main-content"]["vision-h4"];

let topP = document.querySelectorAll(".main-content .top-content p");
topP[0].textContent = s["main-content"]["features-content"];
topP[1].textContent = s["main-content"]["about-content"];

let bottomP = document.querySelectorAll(".main-content .bottom-content p");
bottomP[0].textContent = s["main-content"]["services-content"];
bottomP[1].textContent = s["main-content"]["product-content"];
bottomP[2].textContent = s["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = s["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = s["contact"]["address"];
contactP[1].textContent = s["contact"]["phone"];
contactP[2].textContent = s["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = s.footer.copyright;
