const menuLink=document.querySelectorAll(".menu__sub");menuLink.forEach(e=>{const u=e.querySelector(".menu__submenu");e.addEventListener("mouseover",()=>{u.classList.add("menu__submenu--active")}),e.addEventListener("mouseout",()=>{u.classList.remove("menu__submenu--active")})});