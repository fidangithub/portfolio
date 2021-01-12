const links = document.querySelectorAll(".nav-link");
const input = document.querySelector("#navi-toggle");


Array.from(links).map(link=>{
    link.onclick = ()=> {
        input.checked = false;
    }
});