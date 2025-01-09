let nav = document.querySelector(" .navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
       nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a){
    a.addEventListener("click", function (){
     navcollapse.classList.remove("show");
    })
})







document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id);
      let current = start;
      let range = end - start;
      let increment = end > start ? 1 : -1;
      let step = Math.floor(duration / Math.abs(range));
      let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }
  
    counter("count1", 0, 1500, 6000);
    counter("count2", 0, 2000, 4000);
    counter("count3", 100, 3000, 3651);
    counter("count4", 0, 4851, 4587);
  });