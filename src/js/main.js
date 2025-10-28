import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";





function setParkIntro(data){
    const intro = document.querySelector(".intro");
    intro.innerHTML = 
    `<h1>${data.fullName}</h1>
    <p>${data.description}</p>
    ` ;
}

function setParkInfoLinks(data){
    const info = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    info.insertAdjacentHTML("afterbegin", html.join(""));
}
async function init() {
  const parkData = await getParkData();
  const links = getParkInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}
function enableNavigation(){
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    document.querySelector(".global-nav").classList.toggle("show");
    
    if(target.tagName != "BUTTON"){
      target = target.closest("button");
    }

    if(document.querySelector(".global-nav").classList.contains("show")){
      target.setAttribute("aria-expanded", true);
    }
    else{
      target.setAttribute("aria-expanded", false);
    }
    console.log("toggle");
  });
}

init();
enableNavigation();

