

let navIcon = document.querySelector(".burger-menu__icon");
let navBar = document.querySelector(".burger-menu__nav");
// console.log(navIcon);

function removingEventListener(event) {
  console.log(event);
  if (event.propertyName === "transform") {
    navIcon.classList.remove("burger-menu__icon--remove");
    navIcon.removeEventListener("transitionend", removingEventListener);
  }
}

function iconActive() {
    if (
      navIcon.classList.contains("burger-menu__icon--active") &&
      navBar.classList.contains("burger-menu__nav--active")
    ) {
        navIcon.classList.remove("burger-menu__icon--active");
        navBar.classList.remove("burger-menu__nav--active");
        navIcon.classList.add("burger-menu__icon--remove");
        navIcon.addEventListener("transitionend", removingEventListener);
        console.log(
          navIcon.addEventListener("transitionend", removingEventListener)
        );
    }
    else {
        navIcon.classList.add("burger-menu__icon--active");
        navBar.classList.add("burger-menu__nav--active");
    }
};



navIcon.addEventListener('click', iconActive);


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


