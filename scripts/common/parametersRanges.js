function ranges(){const e=document.querySelector("#rangeSquare");noUiSlider.create(e,{range:{min:40,max:140},step:1,start:[40,140],tooltips:!1,connect:!0});const n=[document.getElementById("rangeSquare-value-lower"),document.getElementById("rangeSquare-value-upper")];e.noUiSlider.on("update",function(e,t){n[t].innerHTML=Number(e[t])});const t=document.querySelector("#rangeFloor");noUiSlider.create(t,{range:{min:1,max:10},step:1,start:[1,10],tooltips:!1,connect:!0});const r=[document.getElementById("rangeFloor-value-lower"),document.getElementById("rangeFloor-value-upper")];t.noUiSlider.on("update",function(e,n){r[n].innerHTML=Number(e[n])});const o=document.querySelector("#rangePrice");noUiSlider.create(o,{range:{min:4,max:23},step:1,start:[4,23],tooltips:!1,connect:!0});const a=[document.getElementById("rangePrice-value-lower"),document.getElementById("rangePrice-value-upper")];o.noUiSlider.on("update",function(e,n){a[n].innerHTML=Number(e[n])})}