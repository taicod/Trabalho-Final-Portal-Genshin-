class MobileNavbar {
    constructor(Hamburguer, navList, navLinks) {
      this.Hamburguer = document.querySelector(Hamburguer);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.Hamburguer.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.Hamburguer.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.Hamburguer) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".hamburguer",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 4500)

function nextImage(){
  count++;
  if(count>3){
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;

}