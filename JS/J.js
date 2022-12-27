// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let xclose = document.querySelector(".close");
let tLinks = document.querySelector(".ul-links");

xclose.classList.add("dis-none");

toggleBtn.onclick = function (e) {
    this.classList.toggle("menu-active");
    this.classList.toggle("show");
    tLinks.classList.toggle("open");

    xclose.classList.remove("dis-none");
    xclose.classList.add("dis-inline");
    document.querySelector(".toggle-menu").style.visibility = "hidden";
    document.querySelector(".content-section").style.visibility = "hidden";
    document.querySelector(".footer-section").style.visibility = "hidden";
    
};

xclose.onclick = function(e){
    this.classList.remove("dis-inline");
    this.classList.add("dis-none");

    document.querySelector(".toggle-menu").style.visibility = "visible";
    document.querySelector(".content-section").style.visibility = "visible";
    document.querySelector(".footer-section").style.visibility = "visible";

    tLinks.classList.toggle("open");

}
