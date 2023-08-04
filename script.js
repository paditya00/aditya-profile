const menuLink = document.querySelectorAll(".menu");

menuLink.forEach((m) => {
  m.addEventListener("click", function () {
    menuLink.forEach((menu) => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.parentElement.classList.toggle("hover-link");
        let value = menu.textContent.toLowerCase();
        console.log("yang ga dipencet", value);
        document.querySelector(`.${value}`).style.display = "none";
        if (value === "profil") {
          document
            .querySelector(".container")
            .classList.remove(`container-${value}`);
          document.querySelector("span").classList.remove(`span-${value}`);
          let link = document.querySelectorAll(".link");
          link.forEach((l) => {
            l.classList.remove(`link-${value}`);
          });
          menu.classList.remove("active");
          menu.classList.remove(`active-${value}`);
        } else if (value === "product") {
          document
            .querySelector(".container")
            .classList.remove(`container-${value}`);
          document.querySelector("span").classList.remove(`span-${value}`);
          let link = document.querySelectorAll(".link");
          link.forEach((l) => {
            l.classList.remove(`link-${value}`);
          });
          menu.classList.remove("active");
          menu.classList.remove(`active-${value}`);
        } else if (value === "contact") {
          document
            .querySelector(".container")
            .classList.remove(`container-${value}`);
          document.querySelector("span").classList.remove(`span-${value}`);
          let link = document.querySelectorAll(".link");
          link.forEach((l) => {
            l.classList.remove(`link-${value}`);
          });
          menu.classList.remove("active");
          menu.classList.remove(`active-${value}`);
        } else {
          document
            .querySelector(".container")
            .classList.remove(`container-${value}`);
          document.querySelector("span").classList.remove(`span-${value}`);
          let link = document.querySelectorAll(".link");
          link.forEach((l) => {
            l.classList.remove(`link-${value}`);
          });
          menu.classList.remove("active");
          menu.classList.remove(`active-${value}`);
        }
      }
    });
    console.log(this);
    let text = this.textContent.toLowerCase();
    console.log(`yang dipencet ${text}`);
    document.querySelector(`.${text}`).style.display = "flex";
    if (text === "profil") {
      document.querySelector(".container").classList.add(`container-${text}`);
      document.querySelector("span").classList.add(`span-${text}`);
      let link = document.querySelectorAll(".link");
      link.forEach((l) => {
        l.classList.add(`link-${text}`);
      });
      this.classList.add("active");
      this.classList.add(`active-${text}`);
    } else if (text === "product") {
      document.querySelector(".container").classList.add(`container-${text}`);
      document.querySelector("span").classList.add(`span-${text}`);
      let link = document.querySelectorAll(".link");
      link.forEach((l) => {
        l.classList.add(`link-${text}`);
      });
      this.classList.add("active");
      this.classList.add(`active-${text}`);
    } else if (text === "contact") {
      document.querySelector(".container").classList.add(`container-${text}`);
      document.querySelector("span").classList.add(`span-${text}`);
      let link = document.querySelectorAll(".link");
      link.forEach((l) => {
        l.classList.add(`link-${text}`);
      });
      this.classList.add("active");
      this.classList.add(`active-${text}`);
    } else {
      this.classList.toggle("active");
      this.parentElement.classList.remove("hover-link");
    }
  });
});
