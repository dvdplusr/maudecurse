let mouseCursor=document.querySelector(".cursor");function cursor(e){mouseCursor.style.top=e.pageY+12+"px",mouseCursor.style.left=e.pageX+4+"px"}window.addEventListener("mousemove",cursor),window.addEventListener("mousedown",()=>{mouseCursor.classList.add("mouse-down")}),window.addEventListener("mouseup",()=>{mouseCursor.classList.remove("mouse-down")});
