const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  const sections = document.querySelectorAll("[data-section]");
  
  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
    }
  }
  scrollReveal();
  addEventOnElem(window, "scroll", scrollReveal);