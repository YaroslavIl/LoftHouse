
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


// languages

let select = document.querySelectorAll(".lang-select");
let test = Array.from(select);


//Language selection during download
document.addEventListener("DOMContentLoaded", setDefaultLanguage);

function setDefaultLanguage() {
  let savedLanguage = localStorage.getItem("language");
  if (savedLanguage !== null && savedLanguage !== undefined) {
    test.forEach((element) => {
      element.value = savedLanguage;
    });
    changeLanguage(savedLanguage);
  }
  else {
    changeLanguage('Uk');
  }
}


test.forEach((element) => {
  element.addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("language", selectedLanguage);

    test.forEach(element => { //синхронізація значень всіх елемеенів масиву
      element.value = selectedLanguage;
    });

    changeLanguage(selectedLanguage);
  });
});

//доступ до json файлів
function loadJsone(file) {
  return fetch(file)
    .then((response) => {
      if (!response.ok) {
      throw new Error(`Network not ok: ${response.status}`)
      }
      return response.json()
    })
    .catch((error) => {
    console.error('Помилка ззчитування:', error);
  })
}

function changeLanguage(lang) {
  // завантаження JSON-файлу для вибраної мови
  loadJsone(`json/${lang}.json`)
    .then((data) => {
      // Оновлення сторінки з новою мовою
      updatePageContent(data);
    })
    .catch((error) => {
      console.error("Помилка завантаження JSON:", error);
    });
}

function updatePageContent(data) {
  // Оновлення тексту на сторінці, використовуючи дані з JSON
  document.querySelector(".header__title").textContent = data.header.title;
  document.querySelector(".bottom__address").textContent = data.header.address;
  document.querySelector(".about").textContent = data.menu.about;
  document.querySelector(".about-burger").textContent = data.menu.about;
  document.querySelector(".location").textContent = data.menu.location;
  document.querySelector(".location-burger").textContent = data.menu.location;
  document.querySelector(".apartments").textContent = data.menu.apartments;
  document.querySelector(".apartments-burger").textContent =
    data.menu.apartments;
  document.querySelector(".mortgage").textContent = data.menu.mortgage;
  document.querySelector(".mortgage-burger").textContent = data.menu.mortgage;
  document.querySelector(".contacts").textContent = data.menu.contacts;
  document.querySelector(".contacts-burger").textContent = data.menu.contacts;
  document.querySelector(".parks").textContent = data.infrastructure.parks;
  document.querySelector(".full").textContent =
    data.infrastructure.fullyEquipped;
  document.querySelector(".fountains").textContent =
    data.infrastructure.fountains;
  document.querySelector(".bike").textContent =
    data.infrastructure.bikePaths;
  document.querySelector(".title").textContent = data.apartmentsSection.title;
  document.querySelector(".penthouse").textContent =
    data.apartmentsSection.penthouse;
  document.querySelector(".niceloft").textContent =
    data.apartmentsSection.niceLoft;
  document.querySelector(".loftstudio").textContent =
    data.apartmentsSection.loftStudio;
  document.querySelector(".prestigeloft").textContent =
    data.apartmentsSection.prestigeLoft;
  document.querySelector(".title-info").textContent = data.projectInfo.title;
  document.querySelector(".description").textContent =
    data.projectInfo.description;
  document.querySelector(".you-name").placeholder = data.projectInfo.name;
  document.querySelector(".phone").placeholder = data.projectInfo.telephone;
  document.querySelector(".button").textContent = data.projectInfo.btn;
  document.querySelector(".form-text-leng").textContent = data.projectInfo.formText;
  document.querySelector(".location-title").textContent = data.location.title;
  document.querySelector(".question-title").textContent = data.question.title;
  document.querySelector(".name").placeholder = data.projectInfo.name;
  document.querySelector(".telephone").placeholder = data.projectInfo.telephone;
  document.querySelector(".btn").textContent = data.projectInfo.btn;
  document.querySelector(".about-footer").textContent = data.footer.links.about;
  document.querySelector(".location-footer").textContent = data.footer.links.location;
  document.querySelector(".apartments-footer").textContent = data.footer.links.apartments;
  document.querySelector(".mortgage-footer").textContent =
    data.footer.links.mortgage;
  document.querySelector(".contacts-footer").textContent =
    data.footer.links.contacts;
  document.querySelector(".settlement").textContent =
    data.footer.sections.settlement;
  document.querySelector(".services").textContent =
    data.footer.sections.services;
  document.querySelector(".sustainability").textContent =
    data.footer.sections.sustainability;
  document.querySelector(".investments").textContent =
    data.footer.sections.investments;
  document.querySelector(".loyalty-program").textContent =
    data.footer.sections.loyaltyProgram;
  document.querySelector(".address").textContent = data.footer.address;
  document.querySelector(".phone-footer").textContent = data.footer.phone;
  document.querySelector(".sales-department-footer").textContent =
    data.footer.salesDepartment;
}



