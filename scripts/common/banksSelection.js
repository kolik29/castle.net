function banksSelection(){const c=document.querySelectorAll(".banks-card");c.forEach(a=>{a.addEventListener("click",function(){c.forEach(c=>{c.classList.remove("banks-card--active")}),a.classList.add("banks-card--active")})})}