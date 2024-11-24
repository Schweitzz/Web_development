/**body styling */

/**create the elements */
let theHeader = document.createElement("header");
theHeader.classList.add("website-head");

let theHeaderLogoContainer = document.createElement("div");
let theHeaderMenuContainer = document.createElement("div");

let theHeaderLogoLinkImg = document.createElement("img");
let theHeaderLogoLink = document.createElement("a");

let theHeaderMenuLinks = ["", "", "", ""];
for (let i = 0; i < 4; i++) {
  theHeaderMenuLinks[i] = document.createElement("a");
}

/**add styling */
document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";
theHeader.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(235, 255, 255); justify-content: space-between; align-items: center;";

theHeaderMenuContainer.style.cssText = "display: flex";

theHeaderLogoLinkImg.style.cssText = "width: 100px;";

for (let i = 0; i < 4; i++) {
  theHeaderMenuLinks[i].style.cssText = " color: black; text-decoration: none; padding: 10px 20px; text-align: center;";
}

/**edit content */
theHeaderMenuLinks[0].innerHTML = "Home";
theHeaderMenuLinks[1].innerHTML = "Contacts us";
theHeaderMenuLinks[2].innerHTML = "About";
theHeaderMenuLinks[3].innerHTML = "Projects";
theHeaderLogoLinkImg.alt = "show me";

/**building the structure */
for (let i = 0; i < 4; i++) {
  theHeaderMenuContainer.append(theHeaderMenuLinks[i]);
}

theHeaderLogoLink.append(theHeaderLogoLinkImg);
theHeaderLogoContainer.append(theHeaderLogoLink);

theHeader.append(theHeaderLogoContainer);
theHeader.append(theHeaderMenuContainer);

document.body.append(theHeader);
