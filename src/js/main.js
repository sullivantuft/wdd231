import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setParkIntro(data){
    const intro = document.querySelector(".intro");
    intro.innerHTML = 
    `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>
    ` ;
}

function setParkInfoLinks(data){
    const info = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    info.insertAdjacentHTML("afterbegin", html.join(""));
}


setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);