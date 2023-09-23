
//burger-menu
let navIcon = document.querySelector(".burger-menu__icon");
let navBar = document.querySelector(".burger-menu__nav");
let navLink = document.querySelectorAll('.nav-link');

function iconActive() {
  navIcon.classList.toggle("burger-menu__icon--active");
  navBar.classList.toggle("burger-menu__nav--active");
};

navIcon.addEventListener("click", iconActive);


function clickLink() {
  if (navIcon.classList.contains('burger-menu__icon--active') && navBar.classList.contains('burger-menu__nav--active')) {
    navIcon.classList.remove("burger-menu__icon--active");
    navBar.classList.remove("burger-menu__nav--active");
  }
}

navLink.forEach(element => {
  element.addEventListener('click', clickLink)
});



//scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blokID = anchor.getAttribute('href')
    document.querySelector('' + blokID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

//animation scrolling

const animItems = document.querySelectorAll(".animation");

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      // висота блоку
      const animItemHeight = animItem.offsetHeight;
      //позиція блоку відносно верху
      const animItemOffset = offset(animItem).top;
      //кофіцієнт старту анімації
      const animStart = 4;

      //розрахунки для старту анімації
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("anim-active");
      }
      else {
        // no-repeat-anim - клас вимикає повтор анімації
        if (!animItem.classList.contains("no-repeat-anim")) {
          animItem.classList.remove("anim-active");
        }
      }
    }
  }

  //отримання розмірів
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}


const languageText = {
  "langText-menu": {
    uk: "Про комплекс Район Каталог квартир Іпотека Контакти",
    en: "About the complex District Catalog of apartments Mortgage Contacts",
    ru: "О комплексе Район Каталог квартир Ипотека Контакты",
  },
  "langText-title": {
    uk: "Житловий комплекс в історичному центрі",
    en: "Residential complex in the historical center",
    ru: "Жилой комплекс  в историческом центре",
  },
}; 

const sections = {
  about: {
    uk: "Про комплекс",
    en: "About the complex",
    ru: "О комплексе",
  },
  district: {
    uk: "Район",
    en: "District",
    ru: "Район",
  },
  catalog: {
    uk: "Каталог квартир",
    en: "Catalog of apartments",
    ru: "Каталог квартир",
  },
  mortgage: {
    uk: "Іпотека",
    en: "Mortgage",
    ru: "Ипотека",
  },
  contacts: {
    uk: "Контакти",
    en: "Contacts",
    ru: "Контакты",
  },
  location: {
    uk: "Адрес",
    en: "Address",
    ru: "Адрес",
  },
  phone: {
    uk: "Телефон",
    en: "Phone",
    ru: "Телефон",
  },
  sales: {
    uk: "Отдел продаж",
    en: "Sales department",
    ru: "Отдел продаж",
  },
};

const content = {
  about: {
    uk: "Житловий комплекс в історичному центрі",
    en: "Residential complex in the historical center",
    ru: "Жилой комплекс в историческом центре",
  },
  district: {
    uk: "Район на карті",
    en: "District on the map",
    ru: "Район на карте",
  },
  catalog: {
    uk: "Наші квартири",
    en: "Our apartments",
    ru: "Наши квартиры",
  },
  mortgage: {
    uk: "Поселення і переїзд",
    en: "Settlement and moving",
    ru: "Поселение и переезд",
  },
  contacts: {
    uk: "Адрес: Наб. реки Фонтанки 10-15\nТелефон: 8 (812) 123-45-67\nОтдел продаж: 10:00 - 20:00",
    en: "Address: Fontanka River Embankment 10-15\nPhone: 8 (812) 123-45-67\nSales department: 10:00 - 20:00",
    ru: "Адрес: Наб. реки Фонтанки 10-15\nТелефон: 8 (812) 123-45-67\nОтдел продаж: 10:00 - 20:00",
  },
  location: {
    uk: "Адрес: ",
    en: "Address: ",
    ru: "Адрес: ",
  },
  phone: {
    uk: "Телефон: ",
    en: "Phone: ",
    ru: "Телефон: ",
  },
  sales: {
    uk: "Отдел продаж: ",
    en: "Sales department: ",
    ru: "Отдел продаж: ",
  },
};


